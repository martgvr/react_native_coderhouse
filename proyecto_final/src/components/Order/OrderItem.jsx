import { Feather } from "@expo/vector-icons"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"

const OrderItem = ({ order }) => {
	console.log(order)

	const { colors } = useTheme()
	const styles = dynamicStyle(colors)
	const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0)

	return (
		<View style={styles.card} onPress={() => {}}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{order.updatedAt}</Text>
				<Text style={styles.text2}>Total: $ {total}</Text>
			</View>
			<Feather name="search" size={30} color={colors.accents} />
		</View>
	)
}

export default OrderItem

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		card: {
			height: 90,
			padding: 10,
			marginBottom: 10,
			borderRadius: 10,
			alignItems: "center",
			flexDirection: "row",
			justifyContent: "space-between",
	
			borderWidth: 1,
			borderColor: colors.border,
			backgroundColor: colors.primary,
		},
		textContainer: {
			gap: 6,
			width: "70%",
			alignItems: "flex-start",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		text: {
			fontSize: 18,
			color: colors.text,
		},
		text2: {
			color: colors.subtitle,
			fontSize: 15,
			fontWeight: "bold",
		},
	})
}