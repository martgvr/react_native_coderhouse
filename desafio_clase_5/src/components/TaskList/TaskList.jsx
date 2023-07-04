import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import RenderItemTask from './RenderItemTask'

const TaskList = ({ list, onPressTask }) => {
  return (
    <View style={styles.view2}>
        <FlatList data={list} keyExtractor={(item) => item.id} renderItem={({ item }) => RenderItemTask({ item, onPressTask }) } />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
    view2: {
		flex: 8,
		padding: 10,
		width: "100%",
		backgroundColor: "lightblue",
	},
})