import React from "react"
import { StyleSheet, Text, View, Pressable } from "react-native"

const RenderItemTask = ({ item, onPressTask }) => {
	const itemStatus = { backgroundColor: item.completed ? "#deebd3" : "#f2d0d0" }

	return (
		<Pressable onPress={() => onPressTask(item)}>
			<View style={[styles.task, itemStatus]} key={item.id}>
				<Text>{item.task}</Text>
				<Text style={styles.status}>{item.completed ? "COMPLETADO" : "SIN COMPLETAR"}</Text>
			</View>
		</Pressable>
	)
}

export default RenderItemTask

const styles = StyleSheet.create({
	task: {
		width: "100%",
		padding: 10,
		backgroundColor: "azure",
		borderRadius: 6,
		marginBottom: 12,
		gap: 2,
	},
	status: {
		fontSize: 10,
		fontWeight: "bold",
		color: "#595959",
	},
})
