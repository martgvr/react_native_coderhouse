import { useTheme } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const AddressItem = ({ location, navigation }) => {
    const { colors } = useTheme()
    const styles = dynamicStyle(colors)

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{location.address}</Text>
            </View>

            <Pressable onPress={() => navigation.navigate('Location Selector')} style={styles.pressable}>
                <MaterialCommunityIcons name="map-marker" color={colors.accents} size={28} />
                <Text style={styles.text2}>Change</Text>
            </Pressable>
        </View>
    );
};

export default AddressItem;

const dynamicStyle = (colors) => {
	return StyleSheet.create({
        card: {
            margin: 10,
            height: 100,
            width: '100%',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
    
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.primary,
        },
        textContainer: {
            width: "70%",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
        text: {
            fontSize: 17,
            color: colors.text,
        },
        text2: {
            fontSize: 12,
            color: colors.accents,
            textTransform: 'uppercase',
        },
        pressable: {
            gap: 6,
            alignItems: 'center',
            flexDirection: 'column',
        },
	})
}