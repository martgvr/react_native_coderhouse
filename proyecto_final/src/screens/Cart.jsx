import { colors } from "../global/colors"
import { useSelector } from 'react-redux'
import { usePostCartMutation } from "../services/shopServices"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"

import CartItem from "../components/CartItem"

const Cart = () => {
	const { items: cartData, total } = useSelector(state => state.cartReducer)

	const confirmHandler = () => {
		
	}

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
							<Text>Total: $ {total}</Text>

							<TouchableOpacity style={styles.button} onPress={confirmHandler}>
								<Text>Confirm</Text>
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
		backgroundColor: colors.primary,
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
	},
	noCartDataText: {
		top: '40%',
		width: 250,
		color: '#555',
		marginTop: 10,
		alignSelf: 'center',
		textAlign: 'center',
	},
	button: {
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#777',
		padding: 10,
		width: 100,
		alignItems: 'center'
	}
})
