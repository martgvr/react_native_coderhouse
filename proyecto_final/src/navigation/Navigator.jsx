import { COLORS } from "../global/colors"
import { Platform, StatusBar } from "react-native"
import { useSelector } from "react-redux"
import { SafeAreaView, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import AuthStack from "./AuthStack"
import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import OrderStack from "./OrderStack"
import ProfileStack from "./ProfileStack"

import Header from "../components/Header"

const Tab = createBottomTabNavigator()

const Navigator = () => {
	const { email } = useSelector(state => state.userReducer)
	
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				{
					email ? 
					<Tab.Navigator
						screenOptions={({ route, navigation }) => ({
							tabBarShowLabel: false,
							tabBarStyle: styles.tabBar,
							header: () => <Header route={route} navigation={navigation} />,
						})}
					>
						<Tab.Screen name="Shop" component={ShopStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="store" color={focused ? COLORS.accents : color} size={30} />) }} />
						<Tab.Screen name="Cart" component={CartStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="cart" color={focused ? COLORS.accents : color} size={30} />) }} />
						<Tab.Screen name="Orders" component={OrderStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="format-list-bulleted" color={focused ? COLORS.accents : color} size={30} />) }} />
						<Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="account" color={focused ? COLORS.accents : color} size={30} />) }} />
					</Tab.Navigator>
					:
					<AuthStack />
				}
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
        position: 'absolute',
        left: 10,
        right: 10,
        height: 40,
        bottom: 10,
        elevation: 4,
        opacity: 0.98,
        borderRadius: 15,
        shadowColor: 'black',
        backgroundColor: '#222',
    },
})
