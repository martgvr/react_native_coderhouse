import Card from "./Card"
import { COLORS } from '../global/colors'
import { Image, Pressable, StyleSheet, Text } from "react-native"

const ProductItem = ({ item, navigation }) => {
	const onSelect = () => navigation.navigate("Detail", { productSelected: item.id })

	return (
		<Pressable onPress={onSelect}>
			<Card>
				<Image resizeMode="cover" style={styles.image} source={{ uri: item.thumbnail }} />
				<Text style={styles.textCategory}>{item.title}</Text>
			</Card>
		</Pressable>
	)
}

export default ProductItem

const styles = StyleSheet.create({
	image: {
		width: 35,
		height: 35,
		borderRadius: 30,
	},
	textCategory: {
		fontSize: 18,
		color: COLORS.text,
	},
})
