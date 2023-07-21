import Cart from "../screens/Cart"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const CartStack = () => {
	return (
		<Stack.Navigator initialRouteName="Cart" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="CartScreen" component={Cart} />
		</Stack.Navigator>
	)
}

export default CartStack