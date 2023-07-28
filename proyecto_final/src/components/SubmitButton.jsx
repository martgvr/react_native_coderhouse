import { colors } from "../global/colors"
import { Pressable, StyleSheet, Text } from "react-native"

const SubmitButton = ({ onPress, title }) => {
	return (
		<Pressable onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	)
}

export default SubmitButton

const styles = StyleSheet.create({
	button: {
		width: "40%",
		padding: 6,
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#aaa',
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#333',
	},
	text: {
		color: 'white',
		fontSize: 22,
	},
})