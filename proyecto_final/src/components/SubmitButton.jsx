import { COLORS } from "../global/colors"
import { Pressable, StyleSheet, Text } from "react-native"

const SubmitButton = ({ onPress, title, width = '40%' }) => {
	return (
		<Pressable onPress={onPress} style={[styles.button, { width: width }]}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	)
}

export default SubmitButton

const styles = StyleSheet.create({
	button: {
		padding: 6,
		marginTop: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#333',
		borderWidth: 1,
		borderRadius: 6,
		borderColor: COLORS.border,
	},
	text: {
		fontSize: 22,
		color: COLORS.text,
	},
})