import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"

const OrderItem = ({ order }) => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)
	const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0)

	return (
		<View style={styles.card} onPress={() => {}}>
			<View style={styles.textContainer}>
				<Text style={styles.text1}>{order.updatedAt}</Text>
				<Text style={styles.text2}>Total: $ {total}</Text>
				<Text style={styles.articlesTitle}>Artículos</Text>
				{
					order.items.map(item =>
						<Text key={item.id} style={styles.text3}>{item.title} ({item.quantity})</Text>
					)
				}
			</View>
		</View>
	)
}

export default OrderItem

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		card: {
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
		text1: {
			fontSize: 18,
			color: colors.text,
		},
		text2: {
			color: colors.subtitle,
			fontSize: 15,
			fontWeight: "bold",
		},
		text3: {
			fontSize: 14,
			color: colors.subtitle,
		},
		articlesTitle: {
			fontSize: 18,
			marginTop: 12,
			fontWeight: 'bold',
			color: colors.text,
		},
	})
}