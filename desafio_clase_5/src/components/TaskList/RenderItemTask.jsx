import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const RenderItemTask = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)} >
        <View style={styles.task} key={item.id}>
            <Text>{item.task}</Text>
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
		marginBottom: 10,
	},
})