import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"

const Loader = () => {
    const styles = dynamicStyle(useTheme().colors)

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Cargando base de datos...</Text>
		</View>
	)
}

export default Loader

const dynamicStyle = (colors) => {
	return StyleSheet.create({
        container: {
            width: "100%",
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 20,
            color: colors.text,
        },
	})
}