import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"

const Error = ({ title, description, code }) => {
	const styles = dynamicStyle(useTheme().colors)

	return (
		<View style={styles.container}>
			<Text style={styles.text1}>{title}</Text>
			<Text style={styles.text2}>{description}</Text>
			{code && <Text style={styles.text3}>{code.toString()}</Text>}
		</View>
	)
}

export default Error

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			width: "100%",
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: colors.secondary,
			padding: 20,
			gap: 10,
		},
		text1: {
			fontSize: 20,
			color: colors.text,
		},
		text2: {
			fontSize: 15,
			color: colors.subtitle,
			textAlign: "center",
			lineHeight: 22,
		},
		text3: {
			width: "90%",
			opacity: 0.4,
			fontSize: 10,
			lineHeight: 14,
			textAlign: "center",
			color: colors.subtitle,
		},
	})
}