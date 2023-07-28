import { COLORS } from "../global/colors"
import { StyleSheet, Text, View } from "react-native"

const Loader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Cargando base de datos...</Text>
		</View>
	)
}

export default Loader

const styles = StyleSheet.create({
	container: {
        width: "100%",
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
	},
    text: {
        fontSize: 20,
        color: COLORS.text,
    },
})
