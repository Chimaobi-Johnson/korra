import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { faBell, faHome, faPenSquare, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const FooterMenu = props => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.itemContainer}><FontAwesomeIcon style={styles.icon} icon={faHome} /></Text>
            <Text style={styles.itemContainer}><FontAwesomeIcon style={styles.icon} icon={faPenSquare} /></Text>
            <Text style={styles.itemContainer}><FontAwesomeIcon style={styles.icon} icon={faUsers} /></Text>
            <Text style={styles.itemContainer}><FontAwesomeIcon style={styles.icon} icon={faBell} /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 18,
        backgroundColor: 'white',
        borderTopColor: '#ccc',
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemContainer: {
        // backgroundColor: 'red',
        // fontSize: 20
    },
    icon: {
        // fontSize: 20
    }
})

export default FooterMenu