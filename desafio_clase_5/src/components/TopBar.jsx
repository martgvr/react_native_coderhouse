import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"

const TopBar = ({ input, setInput, onAddTastk }) => {
	return (
		<View style={styles.view1}>
			<TextInput style={styles.input} placeholder="Escriba una tarea" value={input} onChangeText={setInput} />
			<TouchableOpacity style={styles.buttonAddTask} onPress={onAddTastk}>
				<Text>Agregar tarea</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TopBar

const styles = StyleSheet.create({
	view1: {
		backgroundColor: "azure",
		paddingTop: 30,
		height: "100%",
		width: "100%",
		gap: 20,
		flex: 1,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	input: {
		borderBottomColor: "deepskyblue",
		borderBottomWidth: 3,
		width: 150,
		marginBottom: 20,
		height: 40,
	},
	buttonAddTask: {
		width: 120,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignItems: "center",
		backgroundColor: "darksalmon",
		borderRadius: 10,
	},
})
