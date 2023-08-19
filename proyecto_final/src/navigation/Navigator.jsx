import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { Platform, StatusBar, SafeAreaView, StyleSheet } from "react-native"

import { setUser } from "../features/user/user.slice"
import { sessionsDB } from "../database/sqlite.config"
import { lightTheme, darkTheme } from "../global/colors"

import AuthStack from "./AuthStack"
import MainStack from "./MainStack"

const Navigator = () => {
	const [darkMode, setDarkMode] = useState(true)

	const dispatch = useDispatch()
	const { email } = useSelector(state => state.userReducer)

	useEffect(() => {
		(async ()=> {
            try {
                const session = await sessionsDB.getAll()

                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser({...user, localID: user.localId}))
                }
            } catch (error) {
                console.log('Error getting session:', error.message);
            }
        })()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer theme={darkMode ? darkTheme : lightTheme}>
				{
					email ? 
						<MainStack />
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
	}
})
