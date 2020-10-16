import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { faEllipsisH, faPenSquare, faUserPlus, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../../theme/colors';



const QuestionBar = props => {
    
    return (
        <View style={styles.wrapper}>
            <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faPenSquare} /></Text>
            <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faWifi} /></Text>
            <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faUserPlus} /></Text>
            <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faEllipsisH} /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: colors.lightBlue
    },
    iconStyle: {
        fontSize: 20
    }
})

export default QuestionBar