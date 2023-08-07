import Profile from "../screens/Profile"
import ImageSelector from "../screens/ImageSelector"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListAddress from "../screens/ListAddress"
import LocationSelector from "../screens/LocationSelector"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
			<Stack.Screen name="ProfileScreen" component={Profile} />
			<Stack.Screen name="Image Selector" component={ImageSelector} />
			<Stack.Screen name="List Address" component={ListAddress}/>
            <Stack.Screen name="Location Selector" component={LocationSelector} />
		</Stack.Navigator>
	)
}

export default ProfileStack
