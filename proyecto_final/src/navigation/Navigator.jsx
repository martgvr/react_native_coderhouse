import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { Platform, StatusBar, SafeAreaView, StyleSheet } from "react-native"

import { setUser } from "../features/user/user.slice"
import { lightTheme, darkTheme } from "../global/colors"
import { appConfigDB, sessionsDB } from "../database/sqlite.config"
import { setDarkMode, setWarning } from "../features/app/app.slice"

import AuthStack from "./AuthStack"
import MainStack from "./MainStack"
import WarningModal from "../components/WarningModal"

const Navigator = () => {
	const dispatch = useDispatch()
	const { email } = useSelector(state => state.userReducer)
	const { darkMode, warningStatus, warningCode, warningTitle, warningDescription } = useSelector(state => state.appReducer)

	useEffect(() => {
		(async ()=> {
            try {
                const session = await sessionsDB.getAll()

                if (session?.rows.length) {
                    const user = session.rows1._array[0]
                    dispatch(setUser({...user, localID: user.localId}))
                }

				const appData = await appConfigDB.getAll()
				const themeValue = appData.rows._array[0].darkMode
				dispatch(setDarkMode(themeValue))
            } catch (error) {
				dispatch(setWarning({ 
					warningStatus: true,
					warningTitle: 'ERROR!',
					warningDescription: 'Error cargando la sesión',
					warningCode: error.message, 
				}))
            }
        })()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer theme={darkMode === 'true' ? darkTheme : lightTheme}>
				{
					email ? 
						<MainStack />
						:
						<AuthStack />
				}
				{
					warningStatus && 
						<WarningModal 
							title={warningTitle} 
							code={warningCode} 
							description={warningDescription} 
						/>
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
