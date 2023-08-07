import { useSelector } from "react-redux"
import { StyleSheet, Text, View } from "react-native"
import { useGetUserLocationQuery } from "../services/shopServices"

import AddButton from "../components/AddButton"
import AddressItem from '../components/AddressItem'
import { COLORS } from "../global/colors"

const ListAddress = ({ navigation }) => {
    const { location, localID } = useSelector((state) => state.userReducer);
    const { data: userLocationQuery, isError, isLoading } = useGetUserLocationQuery(localID)

    return location?.latitude || userLocationQuery ? (
        <View style={styles.container}>
            <AddressItem 
                location={location.latitude ? location : userLocationQuery} 
                navigation={navigation} 
            />
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>No location set</Text>
            <AddButton title="Set location" onPress={() => navigation.navigate("Location Selector")} />
        </View>
    );
};

export default ListAddress;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.secondary,
    },
    text: {
        paddingVertical: 20,
        // fontFamily: 'Josefin',
        fontSize: 18
    }
});
