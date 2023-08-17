import { useDispatch } from "react-redux"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, Pressable } from "react-native"
import { setCategorySelected } from '../features/shop/shop.slice'

import Card from "./Card"

const CategoryItem = ({ item, navigation }) => {
	const styles = dynamicStyle(useTheme().colors)
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

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		textCategory: {
			fontSize: 18,
			color: colors.text,
		}
	})
}