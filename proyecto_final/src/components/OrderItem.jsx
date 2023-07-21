import { Feather } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"
import { colors } from "../global/colors"

const OrderItem = ({ order }) => {
	const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0)

	return (
		<View style={styles.card} onPress={() => {}}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{new Date(order.createdAt).toLocaleString()}</Text>
				<Text style={styles.text2}>Total: $ {total}</Text>
			</View>
			<Feather name="search" size={30} color="black" />
		</View>
	)
}

export default OrderItem

const styles = StyleSheet.create({
	card: {
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "white",
		justifyContent: "space-between",
		backgroundColor: colors.tertiary,
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
		color: "black",
	},
	text2: {
		color: "#444",
		fontSize: 15,
		fontWeight: "bold",
	},
})
