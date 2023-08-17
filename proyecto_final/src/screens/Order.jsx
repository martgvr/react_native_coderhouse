import { useSelector } from "react-redux"
import { View, FlatList, StyleSheet } from "react-native"

import { useTheme } from "@react-navigation/native"

import OrderItem from "../components/OrderItem"

const Order = () => {
	const styles = dynamicStyle(useTheme().colors)

	// const orderData = useSelector((state) => state.orderReducer.orderData)

	return (
		<View style={styles.container}>
			{/* <FlatList data={orderData} keyExtractor={(orderItem) => orderItem.id} renderItem={({ item }) => <OrderItem order={item} />} /> */}
		</View>
	)
}

export default Order

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			padding: 20,
			backgroundColor: colors.secondary,
		},
	})
}