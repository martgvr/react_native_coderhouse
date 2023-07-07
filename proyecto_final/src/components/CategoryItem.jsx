import { StyleSheet, Text, Pressable } from "react-native"

import Card from "./Card"

const CategoryItem = ({ item, setCategory }) => {
	return (
		<Pressable onPress={() => setCategory(item)}>
			<Card>
				<Text style={styles.textCategory}>{item}</Text>
			</Card>
		</Pressable>
	)
}

export default CategoryItem

const styles = StyleSheet.create({
	textCategory: {
		fontSize: 18,
	},
})
