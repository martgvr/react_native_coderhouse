import { useSelector } from "react-redux"
import { useTheme } from "@react-navigation/native"
import { useGetOrderByIdQuery } from "../services/shop.service"
import { View, FlatList, StyleSheet, Text } from "react-native"

import Loader from "../components/Global/Loader"
import OrderItem from "../components/Order/OrderItem"

const Order = () => {
	const styles = dynamicStyle(useTheme().colors)
	const { localID } = useSelector(state => state.userReducer)
	const { data: orderData, isError, isLoading } = useGetOrderByIdQuery(localID)

	return (
		<View style={styles.container}>
			{
				isLoading ?
				<Loader />
				:
					isError?
					<Error />
					:
					orderData.length === 0 ?
						<View style={styles.screenFill}>
							<Text style={styles.noCartDataTitle}>No se encontraron ordenes en la base de datos</Text>
							<Text style={styles.noCartDataText}>Confirmá tu compra en el carrito y generá una nueva orden de compra</Text>
						</View>
						:
						<FlatList data={orderData} keyExtractor={(orderItem) => orderItem.id} renderItem={({ item }) => <OrderItem order={item} />} />
			}
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
	})
}