import { COLORS } from "../global/colors"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from "../features/cart/cartSlice"
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native"

import Counter from "../components/Counter"

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
					<View style={styles.container1}>
						<View>
							<Image source={{ uri: product.images[0] }} style={styles.image} />
							<Text style={styles.title}>{product.title}</Text>
							<Text style={styles.description}>{product.description}</Text>
							<Text style={styles.price}>$ {product.price}</Text>
						</View>

						<View>
							<Counter />
							
							<View style={styles.buttonsContainer}>
								<TouchableOpacity style={[styles.button, styles.goBackButton]} onPress={() => navigation.goBack()}>
									<Text style={styles.buttonText}>Go back</Text>
								</TouchableOpacity>

								<TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={onAddToCart} >
									<Text style={styles.buttonText}>Add to cart</Text>
								</TouchableOpacity>
							</View>
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
		backgroundColor: COLORS.secondary,
	},
	container1: {
		height: '100%',
		paddingBottom: 60,
		justifyContent: 'space-between',
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
		color: COLORS.text,
	},
	description: {
		fontSize: 16,
		alignSelf: "center",
		textAlign: "center",
		color: COLORS.subtitle,
	},
	price: {
		fontSize: 20,
		marginTop: 20,
		alignSelf: "center",
		color: COLORS.text,
	},
	buttonsContainer: {
		width: '100%',
		padding: 10,
		marginTop: 10,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: 150,
		height: 50,
		borderWidth: 2,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	goBackButton: {
		borderColor: '#cceeff',
		backgroundColor: COLORS.primary,
	},
	addToCartButton: {
		borderColor: '#d1edd6',
		backgroundColor: COLORS.primary,
	},
	buttonText: {
		color: COLORS.text
	},
})
