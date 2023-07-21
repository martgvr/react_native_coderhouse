import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View, Image, useWindowDimensions } from "react-native"

const ItemDetail = ({ navigation, route }) => {
	const allProducts = useSelector(state => state.shopReducer.allProducts)

	const [product, setProduct] = useState(null)
	const [orientation, setOrientation] = useState("portrait")

	const { width, height } = useWindowDimensions()
	const { productSelected } = route.params

	useEffect(() => {
		setOrientation(width > height ? "landscape" : "portrait")
	}, [width, height])

	useEffect(() => {
		const productFound = allProducts.find((product) => product.id == productSelected)
		setProduct(productFound)
	}, [productSelected])

	return (
		<View style={orientation === "landscape" ? styles.containerLandscape : null}>
			<Button onPress={() => navigation.goBack()} title="Go Back" />
			<View style={styles.container}>
				{product && (
					<View>
						<Image source={{ uri: product.images[0] }} style={styles.image} />
						<Text style={styles.title}>{product.title}</Text>
						<Text style={styles.description}>{product.description}</Text>
						<Text style={styles.price}>$ {product.price}</Text>
					</View>
				)}
			</View>
		</View>
	)
}

export default ItemDetail

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "white",
	},
	containerLandscape: {
		flexDirection: "row",
	},
	image: {
		height: 200,
		width: "100%",
		marginBottom: 10,
	},
	title: {
		fontSize: 22,
		fontWeight: 800,
		alignSelf: "center",
	},
	description: {
		fontSize: 16,
		alignSelf: "center",
		textAlign: "center",
	},
	price: {
		fontSize: 20,
		marginTop: 20,
		alignSelf: "center",
	},
})
