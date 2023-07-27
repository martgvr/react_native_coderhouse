import { colors } from "../global/colors"
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native"

import CartItem from "../components/CartItem"

const Cart = () => {
	const { items: cartData, total } = useSelector(state => state.cartReducer)
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
							<Pressable>
								<Text>Confirm</Text>
							</Pressable>
							<Text>Total: $ {total}</Text>
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
		backgroundColor: colors.primary,
	},
	totalContainer: {
		gap: 10,
		alignSelf: "center",
		flexDirection: "row",
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
	},
	noCartDataText: {
		top: '40%',
		width: 250,
		color: '#555',
		marginTop: 10,
		alignSelf: 'center',
		textAlign: 'center',
	}
})
