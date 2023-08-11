import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import Navigator from './src/navigation/Navigator'

import store from './src/store/store'
import { Provider } from 'react-redux'
import { sqliteInit } from './src/database/sqlite.config'

export default function App() {
    const [fontsLoaded] = useFonts(fonts)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await sqliteInit('sessions')
                console.log('Db initialized/dropped')
                console.log(result)
            } catch (err) {
                console.log("Initialization DB failed:")
                console.log(err.message)
            }
        }
    
        fetchData()
    }, [])

    if (!fontsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}