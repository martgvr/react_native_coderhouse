import { StyleSheet, Text, Pressable } from "react-native"

import Card from "./Card"

const CategoryItem = ({ item, navigation }) => {
	return (
		<Pressable onPress={() => navigation.navigate('ItemListCategory', { category: item })}>
			<Card additionalStyle={{ justifyContent: 'center' }}>
				<Text style={styles.textCategory}>{item}</Text>
			</Card>
		</Pressable>
	)
}

export default CategoryItem

const styles = StyleSheet.create({
	textCategory: {
		fontSize: 18,
	}
})
