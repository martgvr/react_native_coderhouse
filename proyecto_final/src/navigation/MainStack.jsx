import { COLORS } from "../global/colors"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import OrderStack from "./OrderStack"
import ProfileStack from "./ProfileStack"

import Header from "../components/Header"

const Tab = createBottomTabNavigator()

const mainStackOptions = ({ route, navigation }) => ({
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar,
    header: () => <Header route={route} navigation={navigation} />,
});

const MainStack = () => {
    return (
        <Tab.Navigator screenOptions={mainStackOptions}>
            <Tab.Screen name="Shop" component={ShopStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="store" color={focused ? COLORS.accents : color} size={30} />) }} />
            <Tab.Screen name="Cart" component={CartStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="cart" color={focused ? COLORS.accents : color} size={30} />) }} />
            <Tab.Screen name="Orders" component={OrderStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="format-list-bulleted" color={focused ? COLORS.accents : color} size={30} />) }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: ({ color, size, focused }) => (<MaterialCommunityIcons name="account" color={focused ? COLORS.accents : color} size={30} />) }} />
        </Tab.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({
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