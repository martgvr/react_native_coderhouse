import { useEffect, useRef } from "react"
import { useTheme } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, Text, Animated } from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { setAlert } from "../../features/app/app.slice"

const Alert = () => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)

	const dispatch = useDispatch()
	const { alertStatus, alertMessage, alertType } = useSelector((state) => state.appReducer)

	const fadeAnim = useRef(new Animated.Value(0.9)).current

	useEffect(() => {
		const timeout = setTimeout(() => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true,
			}).start(() => {
				dispatch(setAlert({ alertStatus: false, alertMessage: "" }))
				fadeAnim.setValue(1)
			})

			return () => {
				clearTimeout(timeout)
			}
		}, 3000)
	}, [])

	const alertColor = (alertType === "success" && "#7db054") || (alertType === "warning" && "#e6e293") || (alertType === "error" && "#e8646f")

	return (
		alertStatus && (
			<Animated.View style={[styles.container, { borderColor: alertColor }, { opacity: fadeAnim }]}>
				<MaterialCommunityIcons
					size={24}
					color={alertColor}
					name={(alertType === "success" && "check") || (alertType === "warning" && "alert-circle-outline") || (alertType === "error" && "skull-outline")}
				/>
				<Text style={styles.text}>{alertMessage}</Text>
			</Animated.View>
		)
	)
}

export default Alert

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			gap: 10,
			top: 130,
			position: "absolute",
			alignItems: "center",
			flexDirection: "row",
			alignSelf: "flex-end",
			padding: 8,
			borderTopWidth: 4,
			borderLeftWidth: 4,
			borderBottomWidth: 4,
			borderTopLeftRadius: 10,
			borderBottomLeftRadius: 10,
			backgroundColor: colors.primary,
		},
		text: {
			color: colors.text,
		},
	})
}
