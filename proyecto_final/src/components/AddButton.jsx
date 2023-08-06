import React from "react"
import { COLORS } from "../global/colors"
import { Pressable, StyleSheet, Text } from "react-native"

const AddButton = ({ title = "", onPress = () => {}, color = COLORS.tertiary }) => {
	return (
		<Pressable style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	)
}

export default AddButton

const styles = StyleSheet.create({
	button: {
		width: "80%",
		borderWidth: 1,
		// backgroundColor: colors.pink,
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},
	text: {
		// fontFamily: "Ubuntu",
		fontSize: 18,
		// color: colors.lightPink,
	},
})