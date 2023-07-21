import Card from "./Card"
import { useDispatch } from "react-redux"
import { StyleSheet, Text, Pressable } from "react-native"
import { setCategorySelected } from "../features/counter/shopSlice"

const CategoryItem = ({ item, navigation }) => {
	const dispatch = useDispatch()

	const selectCategoryHandler = () => {
		navigation.navigate("ItemListCategory", { category: item })
		dispatch(setCategorySelected(item))
	}

	return (
		<Pressable onPress={selectCategoryHandler}>
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
