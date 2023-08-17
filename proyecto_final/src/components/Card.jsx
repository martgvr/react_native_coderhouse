import { StyleSheet, View } from 'react-native'
import { useTheme } from "@react-navigation/native"

const Card = ({ children, additionalStyle }) => {
    const { colors } = useTheme()
	const styles = dynamicStyle(colors)

	return(
        <View style={[styles.cardContainer, additionalStyle]}>
            {children}
        </View>
    )
}

export default Card

const dynamicStyle = (colors) => {
	return StyleSheet.create({
        cardContainer: {
            gap: 20,
            zIndex: 2,
            height: 60,
            width: '100%',
            paddingLeft: 10,
            borderRadius: 6,
            marginVertical: 6,
            
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.primary,
            
            alignItems: 'center',
            flexDirection: 'row', 
            justifyContent: 'flex-start',
        }
	})
}