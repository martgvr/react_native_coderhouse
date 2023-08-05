import Profile from "../screens/Profile"
import ImageSelector from "../screens/ImageSelector"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
			<Stack.Screen name="ProfileScreen" component={Profile} />
			<Stack.Screen name="Image Selector" component={ImageSelector} />
		</Stack.Navigator>
	)
}

export default ProfileStack
