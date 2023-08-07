import * as Location from "expo-location"
import { COLORS } from "../global/colors"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { MAPS_API_KEY } from "../database/firebaseConfig"
import { setUserLocation } from "../features/user/userSlice"
import { usePostUserLocationMutation } from "../services/shopServices"

import MapPreview from "../components/MapPreview"
import SubmitButton from "../components/SubmitButton"

const LocationSelector = ({ navigation }) => {
    const [error, setError] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState({ latitude: "", longitude: "" })
    
    const [triggerPostUserLocation, resultPostUserLocation] = usePostUserLocationMutation()

    const dispatch = useDispatch()
    const { localID } = useSelector(state => state.userReducer)

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address
        }

        dispatch(setUserLocation(locationFormatted))
        triggerPostUserLocation({ location: locationFormatted,localID })
        navigation.goBack()
    }
    
    //Location requested on mount
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync()

                if (status !== "granted") {
                    setError("Permission to access location was denied")
                    return
                }
    
                let location = await Location.getCurrentPositionAsync({})

                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
                
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            }
        })()
    }, [])

    //Reverse geocoding
    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    console.dir(data);
                    setAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [location]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Address</Text>

            {/* Flatlist con las directions */}
            {location ? (
                <>
                    <Text style={styles.text}>Lat: {location.latitude}, long: {location.longitude}.</Text>
                    <MapPreview location={location} />
                    <Text style={styles.address}>Formatted address: {address}</Text>
                    <SubmitButton onPress={onConfirmAddress} title="Confirm address" width="60%"/>
                </>
            ) : (
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>{error}</Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: COLORS.secondary,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 20,
        color: COLORS.text,
    },
    title: {
        fontSize: 14,
        paddingTop: 20,
        letterSpacing: 8,
        color: COLORS.accents,
        textTransform: 'uppercase',
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: COLORS.accents,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        paddingVertical: 20,
        fontSize: 16,
        color: COLORS.text,
    },
});
