import React from "react"
import { StyleSheet, Text, View, Modal, Pressable } from "react-native"

const ModalTask = ({ modalVisible, setModalVisible, taskActive, onPressStatus }) => {
	return (
		<Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} >
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>{taskActive.task}</Text>
					<View style={styles.modalButtons}>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Cerrar</Text>
						</Pressable>

						<Pressable style={[styles.button, styles.buttonNotyet]} onPress={() => onPressStatus(false)}>
							<Text style={styles.textStyle}>Sin completar</Text>
						</Pressable>

						<Pressable style={[styles.button, styles.buttonDone]} onPress={() => onPressStatus(true)}>
							<Text style={styles.textStyle}>Completada</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default ModalTask

const styles = StyleSheet.create({
    centeredView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	modalView: {
		backgroundColor: "azure",
		alignItems: "center",
		padding: 15,
		width: '90%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	button: {
		borderRadius: 12,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "black",
	},
	buttonDone: {
		backgroundColor: "green",
	},
	buttonNotyet: {
		backgroundColor: "red",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	modalButtons: {
		flexDirection: "row",
		gap: 12,
	},
})
