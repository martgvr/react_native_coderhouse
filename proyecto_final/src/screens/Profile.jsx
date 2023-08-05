import { useState } from "react"
import { useSelector } from "react-redux"
import * as ImagePicker from 'expo-image-picker'
import { Image, StyleSheet, View } from "react-native"
import { useGetProfileImageQuery } from "../services/shopServices"

import AddButton from "../components/AddButton"

const Profile = ({ navigation }) => {
    const { localID } = useSelector(state => state.userReducer)
    console.log(localID);
    // const { data: image } = useGetProfileImageQuery(localID)

    // console.log(localId, profileImage);

    // const cameraImage = image?.image
    // const launchCamera = async () => navigation.navigate('Image Selector')

    return (
        <View style={styles.container}>
                {/* <Image
                    source={profileImage || cameraImage ? { uri: profileImage || cameraImage } : require("../assets/images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            <AddButton onPress={launchCamera} title="Add profile picture" /> */}
        </View>
    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});