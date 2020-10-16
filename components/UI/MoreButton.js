import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MoreButton = ({ onPress, title }) => (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            <FontAwesomeIcon icon={faAngleDown} />
        </TouchableOpacity>
    )

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "transparent",
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 12,
        color: "#000",
        alignSelf: "center",
        fontWeight: 'bold'
    } 
})

export default MoreButton