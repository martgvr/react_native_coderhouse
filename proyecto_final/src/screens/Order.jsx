import { useSelector } from "react-redux"
import { View, FlatList, StyleSheet } from "react-native"

import { useTheme } from "@react-navigation/native"

import OrderItem from "../components/Order/OrderItem"
import { useEffect, useState } from "react"
import { useGetOrderByIdQuery } from "../services/shop.service"
import Loader from "../components/Global/Loader"

const Order = () => {
	const styles = dynamicStyle(useTheme().colors)
	const { data: orderData, isError, isLoading } = useGetOrderByIdQuery('s6GWUPsEOUWUVlGS7efuaPbKxGp1')

	return (
		<View style={styles.container}>
			{
				isLoading ?
				<Loader />
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
	})
}