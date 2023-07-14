import { colors } from "../global/colors"
import { StyleSheet, Text, View } from "react-native"

const Header = () => {
	return (
		<View style={styles.containerHeader}>
			<Text style={styles.headerText}>HEADER</Text>
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
		backgroundColor: colors.primary,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	headerText: {
		fontSize: 24,
		fontFamily: "header",
		letterSpacing: 6,
	},
})
