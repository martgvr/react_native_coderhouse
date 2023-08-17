import * as Location from "expo-location"
import { useEffect, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { MAPS_API_KEY } from "../database/firebase.config"
import { setUserLocation } from "../features/user/user.slice"
import { usePostUserLocationMutation } from "../services/shop.service"

import MapPreview from "../components/MapPreview"
import SubmitButton from "../components/SubmitButton"

const LocationSelector = ({ navigation }) => {
	
	const [error, setError] = useState("")
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
		;(async () => {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync()

				if (status !== "granted") {
					setError("Permission to access location was denied")
					return
				}

				let location = await Location.getCurrentPositionAsync({})
				setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })
			} catch (error) {
				setError(error.message)
			}
		})()
	}, [])

	useEffect(() => {
		;(async () => {
			try {
				if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`
                    const response = await fetch(url_reverse_geocode)
					const data = await response.json()

					setAddress(data.results[0].formatted_address)
				}
			} catch (error) {
				setError(error.message)
			}
		})()
	}, [location])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Address</Text>

			{/* Flatlist con las directions */}
			{location ? (
				<>
					<Text style={styles.text}>Lat: {location.latitude} / Long: {location.longitude}.</Text>
					<MapPreview location={location} />
					<Text style={styles.address}>Formatted address: {address}</Text>
					<SubmitButton onPress={onConfirmAddress} title="Confirm address" width="80%" />
				</>
			) : (
				<>
					<View style={styles.noLocationContainer}>
						<Text>{error}</Text>
					</View>
				</>
			)}
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
			fontSize: 16,
			color: colors.text,
			paddingVertical: 20,
		},
	})
}