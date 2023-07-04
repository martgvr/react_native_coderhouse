import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"

const TopBar = ({ input, setInput, onAddTask }) => {
	return (
		<View style={styles.view1}>
			<TextInput style={styles.input} placeholder="Escriba una tarea" placeholderTextColor="#000" value={input} onChangeText={setInput} />
			<TouchableOpacity style={styles.buttonAddTask} onPress={onAddTask}>
				<Text style={styles.textAddTask}>Agregar tarea</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TopBar

const styles = StyleSheet.create({
	view1: {
		flex: 1,
		gap: 20,
		width: "100%",
		height: "100%",
		paddingTop: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "azure",
	},
	input: {
		borderColor: '#3a6b91',
		borderWidth: 2,
		color: 'black',
		width: 200,
		height: 35,
		padding: 8,
		borderRadius: 10,
	},
	buttonAddTask: {
		width: 120,
		height: 35,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignItems: "center",
		justifyContent: 'center',
		backgroundColor: "#3a6b91",
		borderRadius: 10,
	},
	textAddTask: {
		color: 'white'
	},
})
