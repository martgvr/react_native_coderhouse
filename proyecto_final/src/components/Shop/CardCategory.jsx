import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View, Image } from "react-native"

const CardCategory = ({ name, icon }) => {
    const styles = dynamicStyle(useTheme().colors)

	return (
		<View style={styles.container}>
			<Image resizeMode="cover" style={styles.image} source={{ uri: icon }} />
			<Text style={styles.textCategory}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
		</View>
	)
}

export default CardCategory

const dynamicStyle = (colors) => {
	return StyleSheet.create({
        container: {
            height: 60,
            width: '100%',
            marginBottom: 10,
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.primary,
        },
		textCategory: {
			fontSize: 18,
			color: colors.text,
		},
		image: {
			width: 30,
			height: 30,
            marginHorizontal: 30,
            tintColor: colors.text,
		},
	})
}