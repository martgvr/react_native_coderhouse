import Order from "../screens/Order"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const OrderStack = () => {
	return (
		<Stack.Navigator initialRouteName="OrderScreen" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="OrderScreen" component={Order} />
		</Stack.Navigator>
	)
}

export default OrderStack