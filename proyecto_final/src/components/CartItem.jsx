import { colors } from '../global/colors'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CartItem = ({ cartItem }) => {
	return (
		<View style={styles.card} onPress={() => {}}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					{cartItem.title} ({cartItem.quantity})
				</Text>
				<Text style={styles.text2}>{cartItem.brand}</Text>
				<Text style={styles.text3}>$ {cartItem.price}</Text>
			</View>
			
			<MaterialCommunityIcons name="trash-can-outline" color='black' size={30} />
		</View>
	)
}

export default CartItem

const styles = StyleSheet.create({
	card: {
		height: 100,
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: colors.tertiary,
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
		color: "black",
	},
	text2: {
		fontSize: 17,
		color: "#333",
	},
	text3: {
		fontSize: 16,
		color: '#333',
		fontWeight: 'bold',
	}
})
