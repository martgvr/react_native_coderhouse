import { useDispatch } from "react-redux"
import { TouchableOpacity } from "react-native"
import { setCategorySelected } from '../../features/shop/shop.slice'

import CardCategory from "./CardCategory"

const CategoryItem = ({ item, navigation }) => {
	const dispatch = useDispatch()

	const selectCategoryHandler = () => {
		navigation.navigate("ItemListCategory", { category: item.name })
		dispatch(setCategorySelected(item.name))
	}

	return (
		<TouchableOpacity onPress={selectCategoryHandler}>
			<CardCategory icon={item.icon} name={item.name} />
		</TouchableOpacity>
	)
}

export default CategoryItem