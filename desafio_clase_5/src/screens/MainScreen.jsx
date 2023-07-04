import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

import TopBar from '../components/TopBar.jsx'
import ModalTask from "../components/ModalTask.jsx"
import TaskList from "../components/TaskList/TaskList.jsx"

const MainScreen = ({ taskList }) => {
	const [input, setInput] = useState("")
	const [list, setList] = useState(taskList)
	const [taskActive, setTaskActive] = useState({})
	const [modalVisible, setModalVisible] = useState(false)

	const onAddTask = () => setList([...list, { id: list.length + 1, task: input, completed: false }])

	const onPressTask = (task) => {
		setModalVisible(true)
		setTaskActive(task)
	}

	const onPressStatus = (status) => {
		setModalVisible(false)
		const taskToUpdate = list.find(item => item == taskActive)
		taskToUpdate.completed = status
	}

	return (
		<View style={styles.container}>
			<TopBar input={input} onAddTask={onAddTask} setInput={setInput} />
			<TaskList onPressTask={onPressTask} list={list} />
			<ModalTask onPressStatus={onPressStatus} modalVisible={modalVisible} setModalVisible={setModalVisible} taskActive={taskActive} />
		</View>
	)
}

export default MainScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
})
