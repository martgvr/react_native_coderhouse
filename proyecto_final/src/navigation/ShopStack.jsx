import Home from "../screens/Home"
import ItemDetail from "../screens/ItemDetail"
import ItemListCategory from "../screens/ItemListCategory"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const ShopStack = () => {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="ItemListCategory" component={ItemListCategory} />
			<Stack.Screen name="Detail" component={ItemDetail} />
		</Stack.Navigator>
	)
}

export default ShopStack