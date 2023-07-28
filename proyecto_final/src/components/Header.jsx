import { COLORS } from "../global/colors"
import { StyleSheet, Text, View, Pressable } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ route, navigation }) => {
	return (
		<View style={styles.containerHeader}>
			{
				route.name !== 'Shop' &&
					<Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
						<MaterialCommunityIcons name="arrow-left" color={COLORS.accents} size={24} />
					</Pressable>
			}
			<Text style={styles.headerText}>{route.name}</Text>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	containerHeader: {
		zIndex: 1,
		fontSize: 25,
		paddingVertical: 20,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.primary,

		elevation: 10,
		shadowColor: "#000",
	},
	headerText: {
		fontSize: 24,
		letterSpacing: 6,
		fontFamily: "header",
		color: COLORS.text,
	},
	pressable: {
        left: 20,
        top: "80%",
        position: "absolute",
    },
})
