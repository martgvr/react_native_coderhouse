import { COLORS } from "../global/colors"
import { useSelector } from 'react-redux'
import { usePostCartMutation } from "../services/shop.service"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"

import CartItem from "../components/CartItem"

const Cart = () => {
    const [triggerPostCart, result] = usePostCartMutation()
    const { items: cartData, total, updatedAt, user } = useSelector(state => state.cartReducer)

    const confirmHandler = () => triggerPostCart({ items: cartData, total, user, updatedAt })

    return (
		<View style={styles.container}>
			{
				cartData.length === 0 ?
					<View style={styles.screenFill}>
						<Text style={styles.noCartDataTitle}>No se encontraron articulos en el carrito :(</Text>
						<Text style={styles.noCartDataText}>Visitá nuestra tienda para encontrar tus productos favoritos</Text>
					</View>
					:
					<View style={styles.screenFill}>
						<FlatList data={cartData} keyExtractor={(cartItem) => cartItem.id} renderItem={({ item }) => <CartItem cartItem={item} />} />
						
						<View style={styles.totalContainer}>
							<Text style={styles.buttonText}>Total: $ {total}</Text>

							<TouchableOpacity style={styles.button} onPress={confirmHandler}>
								<Text style={styles.buttonText}>Confirm</Text>
							</TouchableOpacity>
						</View>
					</View>
			}
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingBottom: 65,
		backgroundColor: COLORS.secondary,
	},
	totalContainer: {
		gap: 10,
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
		color: COLORS.text,
	},
	noCartDataText: {
		top: '40%',
		width: 250,
		marginTop: 10,
		alignSelf: 'center',
		textAlign: 'center',
		color: COLORS.subtitle,
	},
	button: {
		padding: 10,
		width: 150,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.border,
		backgroundColor: COLORS.primary,
	},
	buttonText: {
		color: COLORS.text,
	},
})
