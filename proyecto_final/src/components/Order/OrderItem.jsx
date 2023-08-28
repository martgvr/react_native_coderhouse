import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View, Image } from "react-native"

const OrderItem = ({ order }) => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)
	const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0)

	return (
		<View style={styles.card} onPress={() => {}}>
			<View style={styles.textContainer}>
				<View>
					<Text style={styles.title}>Fecha y hora</Text>
					<Text style={styles.text}>{order.updatedAt}</Text>
				</View>

				<View>
					<Text style={styles.title}>Total</Text>
					<Text style={styles.text}>$ {total}</Text>
				</View>

				<View style={styles.articlesContainer}>
					<Text style={styles.title}>Artículos</Text>
					{
						order.items.map(item =>
							<View style={styles.articleRow} key={item.id}>
								<Image source={{ uri: item.thumbnail }} style={styles.image} />
								<Text key={item.id} style={styles.text}>{item.title}</Text>
								<Text style={styles.quantity}>(x{item.quantity})</Text>
							</View>
						)
					}
				</View>
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
			gap: 10,
			width: "100%",
			alignItems: "flex-start",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		title: {
			opacity: 0.6,
			fontSize: 10,
			marginLeft: -2,
			marginBottom: 2,
			letterSpacing: 2,
			fontWeight: 'bold',
			color: colors.subtitle,
			alignSelf: 'flex-start',
			textTransform: 'uppercase',
		},
		text: {
			fontSize: 16,
			color: colors.text,
		},
		articlesContainer: {
			gap: 5,
		},
		articleRow: {
			flexDirection: 'row',
			alignItems: 'center'
		},
		image: {
			height: 30,
			width: 30,
			marginRight: 10,
			borderRadius: 6,
		},
		quantity: {
			opacity: 0.8,
			fontSize: 14,
			marginLeft: 10,
			color: colors.subtitle,
		},
	})
}