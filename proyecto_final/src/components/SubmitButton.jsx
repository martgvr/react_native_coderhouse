import { COLORS } from "../global/colors"
import { Pressable, StyleSheet, Text } from "react-native"

import { useTheme } from "@react-navigation/native"

const SubmitButton = ({ onPress, title, width = '40%' }) => {
	const styles = dynamicStyle(useTheme().colors)

	return (
		<Pressable onPress={onPress} style={[styles.button, { width: width }]}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	)
}

export default SubmitButton

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		button: {
			padding: 6,
			marginTop: 10,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: '#333',
			borderWidth: 1,
			borderRadius: 6,
			borderColor: colors.border,
			backgroundColor: colors.primary,
		},
		text: {
			fontSize: 22,
			color: colors.text,
		},
	})
}