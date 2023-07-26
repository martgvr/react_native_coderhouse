import { StyleSheet, Text, View } from 'react-native'

const Error = () => {
   return (
       <View style={styles.container}>
           <Text style={styles.text1}>Se produjo un error de conexión</Text>
           <Text style={styles.text2}>Reinicie la aplicación para intentar nuevamente.</Text>
       </View>
   )
}

export default Error

const styles = StyleSheet.create({
	container: {
        width: "100%",
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
	},
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 15,
        color: '#444',
    }
})