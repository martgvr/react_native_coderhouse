import { useState } from "react"
import { COLORS } from "../global/colors"
import { StyleSheet, Text, TextInput, View } from "react-native"

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
	const [input, setInput] = useState("")

	const onChangeText = (text) => {
		setInput(text)
		onChange(text)
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.subtitle}>{label}</Text>
			<TextInput style={styles.input} value={input} onChangeText={onChangeText} secureTextEntry={isSecure} />
			{error ? <Text style={styles.error}>{error}</Text> : null}
		</View>
	)
}

export default InputForm

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	subtitle: {
		width: "90%",
		fontSize: 16,
		marginBottom: 6,
		color: COLORS.text,
	},
	error: {
		fontSize: 14,
		color: "red",
	},
	input: {
		width: "90%",
		padding: 6,
		fontSize: 14,
		borderWidth: 1,
		borderRadius: 6,
		color: COLORS.text,
		borderColor: COLORS.border,
	},
})
