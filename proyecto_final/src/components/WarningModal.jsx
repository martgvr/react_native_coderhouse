import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View, Modal } from "react-native"

const WarningModal = ({ title, description, code }) => {
	const styles = dynamicStyle(useTheme().colors)

	return (
		<Modal animationType="none" transparent={true}>
			<View style={styles.centeredView}>
				<View style={styles.modalContainer}>
					<Text style={styles.text1}>{title}</Text>
					<Text style={styles.text2}>{description}</Text>
					{code && <Text style={styles.text3}>{code.toString()}</Text>}
				</View>
			</View>
		</Modal>
	)
}

export default WarningModal

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		centeredView: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},
		modalContainer: {
            gap: 10,
            padding: 20,
			width: "80%",
            elevation: 10,
			shadowColor: "#000",

            borderWidth: 1,
			borderRadius: 10,
            borderColor: colors.border,
            backgroundColor: colors.primary,
		},
		text1: {
			fontSize: 20,
			color: colors.text,
		},
		text2: {
			fontSize: 15,
			lineHeight: 22,
			color: colors.subtitle,
		},
		text3: {
			width: "90%",
			opacity: 0.4,
			fontSize: 10,
			lineHeight: 14,
			color: colors.subtitle,
		},
	})
}
