import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CameraButton = ({ onPress, title }) => (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            <FontAwesomeIcon icon={faCamera} style={{ color: '#eade46bf' }} />
        </TouchableOpacity>
    )

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "transparent",
        // borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 12,
        // borderWidth: 1,
        // borderColor: "#000",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: "#eaeaea",
        borderBottomWidth: 1,
        marginTop: 5
    },
    buttonText: {
        fontSize: 16,
        color: "#d8d7d7",
        alignSelf: "center",
        fontWeight: 'bold',
        paddingRight: 10
    } 
})

export default CameraButton