import { StatusBar } from "react-native"
import { SafeAreaView, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import Header from "../components/Header"
import OrderStack from "./OrderStack"
import { colors } from "../global/colors"

const Tab = createBottomTabNavigator()

const Navigator = () => {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route, navigation }) => ({
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
						header: () => <Header route={route} navigation={navigation} />,
					})}
				>
					<Tab.Screen name="Shop" component={ShopStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="store" color={focused ? colors.accents : color} size={30} />) }} />
					<Tab.Screen name="Orders" component={OrderStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="format-list-bulleted" color={focused ? colors.accents : color} size={30} />) }} />
					<Tab.Screen name="Cart" component={CartStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="cart" color={focused ? colors.accents : color} size={30} />) }} />
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	)
}

export default Navigator

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
    tabBar: {
        backgroundColor: '#222',
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        borderRadius: 15,
        height: 40,
        opacity: 0.98,
    },
})
