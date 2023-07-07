import { colors } from "../global/colors"
import { StyleSheet, View } from "react-native"

const Card = ({ children, additionalStyle }) => {
	return(
        <View style={[styles.cardContainer, additionalStyle]}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        gap: 20,
        zIndex: 2,
        width: '100%',
        height: 50,
        paddingLeft: 10,
        borderRadius: 6,
        marginVertical: 6,
        backgroundColor: colors.tertiary,
        
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'flex-start',
    }
})
