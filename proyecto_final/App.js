import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import Navigator from './src/navigation/Navigator'

import { useState } from 'react'
import { Provider } from 'react-redux'
import { sqliteInit } from './src/database/sqlite.config'

import store from './src/store/store'
import Error from './src/components/Error'

export default function App() {
    const [fontsLoaded] = useFonts(fonts)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                await sqliteInit('sessions')
            } catch (err) {
                setError(true)
            }
        })()
    }, [])

    if (!fontsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            {
                error ?
                <Error title={'ERROR!'} description={'Ocurrió un error al crear la base de datos SQLite. Contacte al desarrollador para obtener soporte.'} />
                :
                <Navigator />
            }
        </Provider>
    );
}