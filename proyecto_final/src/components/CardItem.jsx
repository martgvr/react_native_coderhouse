import { StyleSheet, View, Dimensions } from 'react-native'
import { useTheme } from "@react-navigation/native"

const windowWidth = Dimensions.get('window').width;

const CardItem = ({ children, additionalStyle }) => {
    const styles = dynamicStyle(useTheme().colors)

	return(
        <View style={[styles.cardContainer, additionalStyle]}>
            {children}
        </View>
    )
}

export default CardItem

const dynamicStyle = (colors) => {
	return StyleSheet.create({
        cardContainer: {
            gap: 10,
            zIndex: 2,
            padding: 10,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: colors.border,
            
            backgroundColor: 'white',
            marginRight: 10,
            marginBottom: 6,
            height: 200,
            width: (windowWidth / 2) - 25,

            alignItems: 'center',
            flexDirection: 'column', 
            justifyContent: 'flex-start',
        }
	})
}