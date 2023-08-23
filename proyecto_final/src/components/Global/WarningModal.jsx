import { useDispatch } from "react-redux"
import { useTheme } from "@react-navigation/native"
import { setWarning } from "../../features/app/app.slice"
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"

const WarningModal = ({ title, description, code }) => {
	const dispatch = useDispatch()
	const styles = dynamicStyle(useTheme().colors)
	const closeHandler = () => dispatch(setWarning({ warningStatus: false }))
	
	return (
		<Modal animationType="none" transparent={true}>
			<View style={styles.centeredView}>
				<View style={styles.modalContainer}>
					<Text style={styles.text1}>{title}</Text>
					<Text style={styles.text2}>{description}</Text>
					{code && <Text style={styles.text3}>CODE: {code.toString()}</Text>}

					<TouchableOpacity style={styles.button} onPress={closeHandler}>
						<Text style={styles.buttonText}>Cerrar</Text>
					</TouchableOpacity>
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
            gap: 8,
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
			fontSize: 12,
			lineHeight: 14,
			color: colors.subtitle,
		},
		button: {
			width: 100,
			alignSelf: 'center',
			alignItems: 'center',
			marginTop: 20,
			borderWidth: 1,
			borderRadius: 6,
			paddingVertical: 6,
            borderColor: colors.border,
		},
		buttonText: {
			color: colors.text
		},
	})
}
