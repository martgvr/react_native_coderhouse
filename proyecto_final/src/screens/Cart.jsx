import { colors } from "../global/colors"
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native"

import CartItem from "../components/CartItem"

const Cart = () => {
	const cartData = useSelector(state => state.cartReducer.cartData)
    const total = cartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)

    return (
		<View style={styles.container}>
			<FlatList data={cartData} keyExtractor={(cartItem) => cartItem.id} renderItem={({ item }) => <CartItem cartItem={item} />} />
			<View style={styles.totalContainer}>
				<Pressable>
					<Text>Confirm</Text>
				</Pressable>
				<Text>Total: $ {total}</Text>
			</View>
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingBottom: 65,
		backgroundColor: colors.primary,
	},
	totalContainer: {
		gap: 10,
		alignSelf: "center",
		flexDirection: "row",
	},
})
