import { useTheme } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, Text, View, Pressable } from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { setAlert } from "../../features/app/app.slice"
import { useGetOrderByIdQuery } from "../../services/shop.service"

const Header = ({ route, navigation }) => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)
	
	const dispatch = useDispatch()

	const { localID } = useSelector(state => state.userReducer)
	const { refetch } = useGetOrderByIdQuery(localID)

	const refreshHandler = () => {
		refetch()
		dispatch(setAlert({ alertStatus: true, alertMessage: 'Actualizando lista de ordenes', alertType: 'warning' }))
	}

	return (
		<View style={styles.containerHeader}>
			{	
				route.name !== "Shop" && route.name !== "Login" && route.name !== "Signup" && 
					<Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
						<MaterialCommunityIcons name="arrow-left" color={colors.accents} size={24} />
					</Pressable>
			}

			<Text style={styles.headerText}>{route.name}</Text>

			{
				route.name === 'Orders' &&
					<Pressable style={styles.refresh} onPress={refreshHandler}>
						<MaterialCommunityIcons name="refresh" color={colors.accents} size={24} />
					</Pressable>
			}
		</View>
	)
}

export default Header

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		containerHeader: {
			zIndex: 1,
			fontSize: 25,
			paddingVertical: 20,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: colors.primary,
	
			elevation: 10,
			shadowColor: "#000",
		},
		headerText: {
			fontSize: 24,
			letterSpacing: 6,
			fontFamily: "header",
			color: colors.text,
		},
		pressable: {
			left: 20,
			top: "91%",
			position: "absolute",
		},
		refresh: {
			right: 20,
			top: "91%",
			position: "absolute",
		},
	})
}