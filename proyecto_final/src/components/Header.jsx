import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View, Pressable } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Header = ({ route, navigation }) => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)

	return (
		<View style={styles.containerHeader}>
			{route.name !== "Shop" && route.name !== "Login" && route.name !== "Signup" && (
				<Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons name="arrow-left" color={colors.accents} size={24} />
				</Pressable>
			)}
			<Text style={styles.headerText}>{route.name}</Text>
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
			top: "80%",
			position: "absolute",
		},
	})
}