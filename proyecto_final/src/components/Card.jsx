import { colors } from "../global/colors"
import { StyleSheet, View } from "react-native"

const Card = ({ children }) => {
	return(
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        zIndex: 2,
        width: '100%',
        height: 50,
        borderRadius: 6,
        marginVertical: 6,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.tertiary,

        gap: 20,
        paddingLeft: 10,
        flexDirection: 'row', 
        justifyContent: 'flex-start',
    }
})
