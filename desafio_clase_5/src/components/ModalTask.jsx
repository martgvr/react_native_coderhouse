import React from "react"
import { StyleSheet, Text, View, Modal, Pressable } from "react-native"

const ModalTask = ({ modalVisible, setModalVisible, taskActive }) => {
	return (
		<Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>{taskActive.task}</Text>
					<View style={styles.modalButtons}>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Cancel</Text>
						</Pressable>

						<Pressable style={[styles.button, styles.buttonNotyet]} onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Not yet</Text>
						</Pressable>

						<Pressable style={[styles.button, styles.buttonDone]} onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Done</Text>
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
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 10,
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
		backgroundColor: "#2196F3",
	},
	buttonDone: {
		backgroundColor: "grey",
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
