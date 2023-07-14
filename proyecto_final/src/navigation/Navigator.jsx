import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Platform, StyleSheet, View, StatusBar } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../screens/Home"
import Header from "../components/Header"
import ItemDetail from "../screens/ItemDetail"
import ItemListCategory from "../screens/ItemListCategory"

const Stack = createNativeStackNavigator()

const Navigator = () => {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={({ route }) => ({
						header: () => <Header />,
						animation: "slide_from_right",
					})}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="ItemListCategory" component={ItemListCategory} />
					<Stack.Screen name="ItemDetail" component={ItemDetail} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	)
}

export default Navigator

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
})
