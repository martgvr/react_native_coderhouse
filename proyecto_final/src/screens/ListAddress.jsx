import { useSelector } from "react-redux"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import { useGetUserLocationQuery } from "../services/shop.service"

import AddressItem from '../components/Location/AddressItem'
import SubmitButton from "../components/Global/SubmitButton"

const ListAddress = ({ navigation }) => {
    const styles = dynamicStyle(useTheme().colors)

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

const dynamicStyle = (colors) => {
	return StyleSheet.create({
        container: {
            height: '100%',
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: colors.secondary,
        },
        text: {
            fontSize: 18,
            color: colors.text,
            paddingVertical: 20,
        }
	})
}