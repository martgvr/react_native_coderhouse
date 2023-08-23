import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "../screens/Login"
import SignupScreen from "../screens/Signup"
import Header from "../components/Global/Header"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={({ route, navigation }) => ({
				animation: 'none',
				header: () => {
					return <Header route={route} navigation={navigation} />
				},
			})}
		>
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
		</Stack.Navigator>
	)
}

export default AuthStack