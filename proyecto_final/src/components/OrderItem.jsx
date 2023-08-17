import { Feather } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

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
		height: 90,
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",

		borderWidth: 1,
		borderColor: "#bbb",
		backgroundColor: "#fff",

		shadowColor: "#222",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 15,
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
