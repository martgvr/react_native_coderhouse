import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CartItem = ({ cartItem }) => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)

	return (
		<View style={styles.card} onPress={() => {}}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					{cartItem.title} ({cartItem.quantity})
				</Text>
				<Text style={styles.text2}>{cartItem.brand}</Text>
				<Text style={styles.text3}>$ {cartItem.price}</Text>
			</View>

			<MaterialCommunityIcons name="trash-can-outline" color={colors.accents} size={30} />
		</View>
	)
}

export default CartItem

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		card: {
			height: 100,
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
			gap: 4,
			flex: 1,
			alignItems: "flex-start",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		text: {
			fontSize: 19,
			color: colors.text,
		},
		text2: {
			fontSize: 17,
			color: colors.subtitle,
		},
		text3: {
			fontSize: 16,
			color: colors.subtitle,
			fontWeight: "bold",
		},
	})
}