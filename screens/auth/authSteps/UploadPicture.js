import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/UI/Header';
import CameraButton from '../../../components/UI/CameraButton';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const placeholderImage = require('../../../assets/images/avatar-1577909_640.png'); 


const UploadPicture = props => {

    const [pickedImage, setPickedImage] = useState(null)

    const verifyPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if(result.status !== 'granted') {
            Alert.alert(
            'Permission Denied', 
            'You need to grant camera permissions to use this app',
             [{text: 'Okay'}])
             return false
        }
        return true
    }

    const getImageFromGallery = async () => {
        const hasPermission = await verifyPermission();
        if(!hasPermission) {
            return
        }
        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.6
        })
        setPickedImage(image.uri);
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermission();
        if(!hasPermission) {
            return
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.6
        });
        setPickedImage(image.uri);
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.nextButtonContainer}>
               <Button title="Next" onPress={props.nextStepHandler} style={styles.nextButton} />
            </View>
            <View style={styles.contentBox}>
                <Text style={{ color: 'blanchedalmond', padding: 5, borderWidth: 1, marginBottom:7 }}>Registeration Successful</Text>
                <Header text="Upload Profile Picture" color="#eaeaea" />
                <View>
                    <View style={styles.profilePictureContainer}>
                        <Image style={styles.profilePicture} source={pickedImage ? {uri: pickedImage} : placeholderImage} />
                    </View>
                    <Button title="Select Image" onPress={getImageFromGallery} />
                    <CameraButton icon={"false"} title="Take Photo" onPress={takeImageHandler} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30
    },
    contentBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    profilePictureContainer: {
        // height: 200,
        // width: 200,
        borderRadius: 200,
        margin: 20
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    nextButtonContainer: {
        width: 100,
        alignSelf: 'flex-end'
    },
    nextButton: {
        alignSelf: 'flex-end',
        width: 70,
        height: 70,
    }
})

export default UploadPicture;