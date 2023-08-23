import { useState } from "react"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, TextInput, View } from "react-native"

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
	const styles = dynamicStyle(useTheme().colors)

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

const dynamicStyle = (colors) => {
	return StyleSheet.create({
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
			color: colors.text,
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
			color: colors.text,
			borderColor: colors.border,
		},
	})
}