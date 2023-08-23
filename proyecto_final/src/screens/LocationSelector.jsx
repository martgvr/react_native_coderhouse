import * as Location from "expo-location"
import { useTheme } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { setWarning } from "../features/app/app.slice"
import { MAPS_API_KEY } from "../database/firebase.config"
import { setUserLocation } from "../features/user/user.slice"
import { usePostUserLocationMutation } from "../services/shop.service"

import MapPreview from "../components/Location/MapPreview"
import SubmitButton from "../components/Global/SubmitButton"

const LocationSelector = ({ navigation }) => {
	const [address, setAddress] = useState("")
	const [location, setLocation] = useState({ latitude: "", longitude: "" })
	
	const [triggerPostUserLocation, resultPostUserLocation] = usePostUserLocationMutation()
	
	const dispatch = useDispatch()
	const styles = dynamicStyle(useTheme().colors)
	const { localID } = useSelector((state) => state.userReducer)

	const onConfirmAddress = () => {
		const locationFormatted = { latitude: location.latitude, longitude: location.longitude, address }
		
		dispatch(setUserLocation(locationFormatted))
		triggerPostUserLocation({ location: locationFormatted, localID })
		navigation.goBack()
	}

	useEffect(() => {
		(async () => {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync()

				if (status !== "granted") {
					dispatch(setWarning({ 
						warningCode: error.message, 
						warningTitle: 'ERROR!',
						warningStatus: true,
						warningDescription: 'No se pudieron obtener los permisos de localización.',
					}))

					return
				}

				let location = await Location.getCurrentPositionAsync({})
				setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })
			} catch (error) {
				dispatch(setWarning({ 
					warningCode: error.message, 
					warningTitle: 'ERROR!',
					warningStatus: true,
					warningDescription: 'No se pudo inicializar la localización.',
				}))
			}
		})()
	}, [])

	useEffect(() => {
		(async () => {
			try {
				if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`
                    const response = await fetch(url_reverse_geocode)
					const data = await response.json()

					setAddress(data.results[0].formatted_address)
				}
			} catch (error) {
				dispatch(setWarning({ 
					warningCode: error.message, 
					warningTitle: 'ERROR!',
					warningStatus: true,
					warningDescription: 'No se pudo obtener la localización del dispositivo.',
				}))
			}
		})()
	}, [location])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Address</Text>
			{ location && 
				<>
					<Text style={styles.text}>Lat: {location.latitude} / Long: {location.longitude}.</Text>
					<MapPreview location={location} />
					<Text style={styles.address}>Formatted address: {address}</Text>
					<SubmitButton onPress={onConfirmAddress} title="Confirm address" width="80%" />
				</>
			}
		</View>
	)
}

export default LocationSelector

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "flex-start",
			backgroundColor: colors.secondary,
		},
		text: {
			fontSize: 18,
			paddingTop: 10,
			paddingBottom: 20,
			color: colors.text,
		},
		title: {
			fontSize: 14,
			paddingTop: 20,
			letterSpacing: 8,
			color: colors.accents,
			textTransform: "uppercase",
		},
		noLocationContainer: {
			width: 200,
			height: 200,
			padding: 10,
			borderWidth: 2,
			borderColor: colors.accents,
			alignItems: "center",
			justifyContent: "center",
		},
		address: {
			padding: 20,
			fontSize: 16,
			color: colors.text,
		},
	})
}