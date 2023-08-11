import { COLORS } from '../global/colors'
import { StyleSheet, Text, View } from 'react-native'

const Error = ({ title, description }) => {
   return (
       <View style={styles.container}>
           <Text style={styles.text1}>{title}</Text>
           <Text style={styles.text2}>{description}</Text>
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
        backgroundColor: COLORS.secondary,
        padding: 20,
        gap: 10,
	},
    text1: {
        fontSize: 20,
        color: COLORS.text,
    },
    text2: {
        fontSize: 15,
        color: '#444',
        color: COLORS.subtitle,
        textAlign: 'center',
        lineHeight: 22,
    }
})