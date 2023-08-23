import CardItem from "./CardItem"
import { useTheme } from "@react-navigation/native"
import { Image, Pressable, StyleSheet, Text } from "react-native"

const ProductItem = ({ item, navigation }) => {
	const styles = dynamicStyle(useTheme().colors)
	const onSelect = () => navigation.navigate("Detail", { productSelected: item.id })

	return (
		<Pressable onPress={onSelect}>
			<CardItem>
				<Image resizeMode="cover" style={styles.image} source={{ uri: item.thumbnail }} />
				<Text style={styles.textCategory}>{item.title}</Text>
			</CardItem>
		</Pressable>
	)
}

export default ProductItem

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		image: {
			width: '100%',
			height: 95,
		},
		textCategory: {
			fontSize: 16,
			color: colors.text,
			alignSelf: 'flex-start',
		},
	})
}