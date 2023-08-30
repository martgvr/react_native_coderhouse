import { useTheme } from "@react-navigation/native"
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"

import { setAlert } from "../features/app/app.slice"
import { clearCart } from '../features/cart/cart.slice'
import { usePostCartMutation } from "../services/shop.service"

import CartItem from "../components/Cart/CartItem"

const Cart = () => {
	const dispatch = useDispatch()
	const styles = dynamicStyle(useTheme().colors)
    const [triggerPostCart, result] = usePostCartMutation()

    const { localID } = useSelector(state => state.userReducer)
    const { items: cartData, total, updatedAt } = useSelector(state => state.cartReducer)
	
	const clearCartHandler = () => dispatch(clearCart())

    const confirmHandler = () => {
		triggerPostCart({ items: cartData, total, localID, updatedAt })
		dispatch(setAlert({ alertStatus: true, alertMessage: 'Compra confirmada con éxito', alertType: 'success' }))
		dispatch(clearCart())
	}

    return (
		<View style={styles.container}>
			{
				cartData.length === 0 ?
					<View style={styles.screenFill}>
						<Text style={styles.noCartDataTitle}>No se encontraron articulos en el carrito</Text>
						<Text style={styles.noCartDataText}>Visitá nuestra tienda para encontrar tus productos favoritos</Text>
					</View>
					:
					<View style={styles.screenFill}>
						<FlatList data={cartData} keyExtractor={(cartItem) => cartItem.id} renderItem={({ item }) => <CartItem cartItem={item} />} />
						
						<View style={styles.totalContainer}>
							<Text style={styles.buttonText}>Total: $ {total}</Text>

							<View style={styles.buttonsContainer}>
								<TouchableOpacity style={[styles.button, styles.goBackButton]} onPress={clearCartHandler}>
									<Text style={styles.buttonText}>Clear cart</Text>
								</TouchableOpacity>

								<TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={confirmHandler}>
									<Text style={styles.buttonText}>Confirm</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
			}
		</View>
	)
}

export default Cart

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			padding: 10,
			paddingBottom: 65,
			backgroundColor: colors.secondary,
		},
		totalContainer: {
			gap: 10,
			width: '100%',
			alignSelf: "center",
			alignItems: 'center',
			flexDirection: "column",
		},
		screenFill: {
			height: '100%'
		},	
		noCartDataTitle: {
			top: '40%',
			width: 250,
			fontSize: 22,
			alignSelf: 'center',
			textAlign: 'center',
			color: colors.text,
		},
		noCartDataText: {
			top: '40%',
			width: 250,
			marginTop: 10,
			alignSelf: 'center',
			textAlign: 'center',
			color: colors.subtitle,
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
		buttonsContainer: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	})
}