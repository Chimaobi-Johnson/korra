import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { faEllipsisH, faPenSquare, faUserPlus, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from '../../theme/colors';
import AnswerModal from '../Modal/AnswerModal';



const QuestionBar = props => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View>
            <AnswerModal modalVisible toggleModal />
            <View style={styles.wrapper}>
                <Text onPress={toggleModal} style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faPenSquare} /></Text>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faWifi} /></Text>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faUserPlus} /></Text>
                <Text style={styles.iconContainer}><FontAwesomeIcon style={styles.iconStyle} icon={faEllipsisH} /></Text>
            </View>
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