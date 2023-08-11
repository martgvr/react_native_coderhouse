import { COLORS } from "../global/colors"
import { useSelector } from "react-redux"
import { StyleSheet, Text, View } from "react-native"
import { useGetUserLocationQuery } from "../services/shop.service"

import AddButton from "../components/AddButton"
import AddressItem from '../components/AddressItem'
import SubmitButton from "../components/SubmitButton"

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
            <SubmitButton title={'Set location'} onPress={() => navigation.navigate("Location Selector")} width="80%" />
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
        fontSize: 18,
        color: COLORS.text,
        paddingVertical: 20,
    }
});
