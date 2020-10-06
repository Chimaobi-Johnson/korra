import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {ScrollView} from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBicycle, faMapMarker, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import colors from '../../theme/colors';


const ProfileDetails = props => {
    return (
        <ScrollView>
            <View style={styles.listContainer}>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.icon} icon={faPhone} /></Text>
                <Text style={styles.titleContainer}>Mobile Number</Text>
                <Text style={styles.valueContainer}>07012191531</Text>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.icon} icon={faMapMarker} /></Text>
                <Text style={styles.titleContainer}>Country</Text>
                <Text style={styles.valueContainer}>Australia</Text>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.icon} icon={faUsers} /></Text>
                <Text style={styles.titleContainer}>Group</Text>
                <Text style={styles.valueContainer}>Mental Health</Text>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.icon} icon={faBicycle} /></Text>
                <Text style={styles.titleContainer}>Interests</Text>
                <Text style={styles.valueContainer}>Coding, teaching, music</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: '#111113',
        color: colors.themeColor.textColor,
        padding: 10,
        borderRadius: 50,
        marginLeft: 10,
    },
    icon: {
        // color: colors.themeColor.textColor,
        color: '#2a2a2b'
    },
    titleContainer: {
        color: colors.themeColor.textColor,
        textAlign: 'left',
        width: 180,
        paddingLeft: 20 
    },
    valueContainer: {
        color: colors.themeColor.textColor,
        textAlign: 'left',
        width: 150,
        fontWeight: 'bold'
    }
})

export default ProfileDetails;
