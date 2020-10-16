import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const RelatedGroups = props => {
    
    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>Related Groups</Text>
            <View style={styles.groupWrapper}>
                There are no related groups for now
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        padding: 10,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 12,
        borderBottomColor: "#ccc",
        borderStyle: 'solid',
        borderBottomWidth: .5,
        paddingBottom: 10
    },
    groupWrapper: {
        padding: 20
    }
})

export default RelatedGroups