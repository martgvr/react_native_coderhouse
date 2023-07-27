import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from "../features/cart/cartSlice"
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native"

const ItemDetail = ({ navigation, route }) => {
	const dispatch = useDispatch()
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

	const onAddToCart = () => {
		dispatch(addCartItem({ ...product, quantity: 1 }))
	}

	return (
		<View style={orientation === "landscape" ? styles.containerLandscape : null}>
			<View style={styles.container}>
				{product && (
					<View>
						<Image source={{ uri: product.images[0] }} style={styles.image} />
						<Text style={styles.title}>{product.title}</Text>
						<Text style={styles.description}>{product.description}</Text>
						<Text style={styles.price}>$ {product.price}</Text>

						<View style={styles.buttonsContainer}>
							<TouchableOpacity style={[styles.button, styles.goBackButton]} onPress={() => navigation.goBack()}>
								<Text>Go back</Text>
							</TouchableOpacity>

							<TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={onAddToCart} >
								<Text>Add to cart</Text>
							</TouchableOpacity>
						</View>
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
	buttonsContainer: {
		width: '100%',
		padding: 10,
		marginTop: 20,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: 120,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#aaa',
		alignItems: 'center',
	},
	goBackButton: {
		backgroundColor: '#cceeff'
	},
	addToCartButton: {
		backgroundColor: '#d1edd6'
	},	
})
