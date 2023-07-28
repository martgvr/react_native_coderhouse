import { COLORS } from '../global/colors'
import { StyleSheet, View } from 'react-native'

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
        height: 60,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 6,
        marginVertical: 6,
        
        borderWidth: 1,
		borderColor: COLORS.border,
		backgroundColor: COLORS.primary,
        
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'flex-start',
    }
})
