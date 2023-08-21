import { useState } from 'react'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'

import store from './src/store/store'
import Navigator from './src/navigation/Navigator'

import { fonts } from './src/global/fonts'
import { ordersDB, sessionsDB, appConfigDB } from './src/database/sqlite.config'

import Error from './src/components/Error'

export default function App() {
    const [fontsLoaded] = useFonts(fonts)
    const [error, setError] = useState({ status: false, code: "" })
    
    useEffect(() => {
        (async () => {
            try {
                await appConfigDB.init('darkMode TEXT NOT NULL')
                await sessionsDB.init('localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL')
                await ordersDB.init('orderID TEXT PRIMARY KEY NOT NULL, orderTotal TEXT NOT NULL, orderProducts TEXT NOT NULL')      
                await appConfigDB.insert({ columns: 'darkMode', params: [''] })
            } catch (err) {
                setError({ status: true, code: err })
            }
        })()
    }, [])

    if (!fontsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            {
                error.status ?
                    <Error title={'ERROR!'} description={'Ocurrió un error al crear la base de datos SQLite. Contacte al desarrollador para obtener soporte.'} code={error.code} />
                    :
                    <Navigator />
            }
        </Provider>
    )
}