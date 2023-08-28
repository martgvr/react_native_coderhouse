import { useEffect, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native"

import { addCartItem } from "../features/cart/cart.slice"
import { resetAmount } from "../features/counter/counter.slice"
import { useGetProductByIdQuery } from "../services/shop.service"

import Loader from '../components/Global/Loader'
import Counter from "../components/Shop/Counter"
import PictureGallery from '../components/Shop/PictureGallery'

const ItemDetail = ({ navigation, route }) => {
	const { colors } = useTheme()
	const dispatch = useDispatch()
	const styles = dynamicStyle(colors)

	const count = useSelector(state => state.counterReducer.value)

	const { width, height } = useWindowDimensions()
	const { productSelected } = route.params
	
	const [product, setProduct] = useState(null)
	const [orientation, setOrientation] = useState("portrait")
	const [imageToShow, setImageToShow] = useState('')

	const { data: productFound, isLoading, isError } = useGetProductByIdQuery(productSelected)
	
	useEffect(() => {
		dispatch(resetAmount())
	}, [])

	useEffect(() => {
		setProduct(productFound)
		setImageToShow(productFound?.images[0])
	}, [productFound])

	useEffect(() => {
		setOrientation(width > height ? "landscape" : "portrait")
	}, [width, height])

	const onAddToCart = () => {
		dispatch(addCartItem({ ...product, quantity: count }))
		dispatch(resetAmount())
	}

	return (
		<View style={orientation === "landscape" ? styles.containerLandscape : null}>
			<View style={styles.container}>

				{!product ?
					<Loader />
					:
					<View style={styles.container1}>
						<View>
							<Image source={{ uri: imageToShow }} style={styles.image} />

							{
								product.images &&
									<PictureGallery setImageToShow={setImageToShow} images={product.images} />
							}

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

								<TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={onAddToCart}>
									<Text style={styles.buttonText}>Add to cart</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				}
			</View>
		</View>
	)
}

export default ItemDetail

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			height: "100%",
			backgroundColor: colors.secondary,
		},
		container1: {
			height: '100%',
			paddingBottom: 51,
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
			color: colors.text,
		},
		description: {
			fontSize: 16,
			alignSelf: "center",
			textAlign: "center",
			color: colors.subtitle,
		},
		price: {
			fontSize: 20,
			marginTop: 20,
			alignSelf: "center",
			color: colors.text,
		},
		buttonsContainer: {
			width: '100%',
			padding: 10,
			marginTop: 2,
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
			backgroundColor: colors.primary,
		},
		addToCartButton: {
			borderColor: '#d1edd6',
			backgroundColor: colors.primary,
		},
		buttonText: {
			color: colors.text
		},
	})
}