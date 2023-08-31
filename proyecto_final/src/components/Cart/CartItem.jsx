import { useDispatch } from "react-redux"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View, Image } from "react-native"
import { removeCartItem } from "../../features/cart/cart.slice"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CartItem = ({ cartItem }) => {
	const { colors } = useTheme()
	const dispatch = useDispatch()
	const styles = dynamicStyle(colors)

	const deleteItemHandler = (id) => dispatch(removeCartItem({ id }))

	return (
		<View style={styles.card}>
			<Image source={{ uri: cartItem.thumbnail }} style={styles.image} />
			
			<View style={styles.textContainer}>
				<View>
					<Text style={styles.title}>Articulo</Text>
					<Text style={styles.text}>{cartItem.title}</Text>
				</View>

				<View>
					<Text style={styles.title}>Marca</Text>
					<Text style={styles.text}>{cartItem.brand}</Text>
				</View>

				<View style={styles.bottomData}>
					<View>
						<Text style={styles.title}>Cantidad</Text>
						<Text style={styles.text}>{cartItem.quantity}</Text>
					</View>

					<View>
						<Text style={styles.title}>Precio</Text>
						<Text style={styles.text}>$ {cartItem.price}</Text>
					</View>
				</View>

			</View>

			<MaterialCommunityIcons name="trash-can-outline" color={colors.accents} size={30} style={styles.deleteIcon} onPress={() => deleteItemHandler(cartItem.id)}/>
		</View>
	)
}

export default CartItem

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		card: {
			gap: 10,
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
			flex: 1,
			alignItems: "flex-start",
			flexDirection: "column",
			justifyContent: "flex-start",
		},
		title: {
			opacity: 0.6,
			fontSize: 10,
			marginLeft: -2,
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
		image: {
			height: '100%',
			width: 80,
			marginRight: 10,
			borderRadius: 6,
		},
		deleteIcon: {
			marginTop: 6,
			alignSelf: 'flex-start',
		},
		bottomData: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	})
}