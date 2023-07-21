import { colors } from "../global/colors"
import { useSelector } from "react-redux"
import { View, FlatList, StyleSheet } from "react-native"

import OrderItem from "../components/OrderItem"

const Order = () => {
	const orderData = useSelector((state) => state.orderReducer.orderData)

	return (
		<View style={styles.container}>
			<FlatList data={orderData} keyExtractor={(orderItem) => orderItem.id} renderItem={({ item }) => <OrderItem order={item} />} />
		</View>
	)
}

export default Order

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: colors.primary,
	},
})
