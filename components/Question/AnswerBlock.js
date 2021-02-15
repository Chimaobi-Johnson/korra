import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { faArrowDown, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../theme/colors';
import Header from '../UI/Header';
import PostStats from '../Post/PostActions';
import MoreButton from '../UI/MoreButton';


const userPicFemale2 = 'https://randomuser.me/api/portraits/women/89.jpg';


const AnswerBlocks = ({ answer }) => {
    
    return (
        <View style={styles.wrapper}>
            <View style={styles.userArea}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={answer.userDetails.userImage[0] ? answer.userDetails.userImage[0] : require('../../assets/images/avatar-1577909_640.png')} />
                </View>
                <View style={styles.userInfo}>
                    <Header size="sm" text={answer.userDetails.firstName[0] + ' ' + answer.userDetails.lastName[0]}/>
                    <Text>{answer.userDetails.occupation[0] ? answer.userDetails.occupation[0] : answer.userDetails.userEmail[0]}</Text>
                    <Text style={styles.updatedAt}>Updated July 9</Text>
                </View>
                <View style={styles.requestContainer}>
                    <Text><FontAwesomeIcon icon={faUserPlus} /></Text>
                </View>
            </View>
            <LinearGradient colors={['#fff', '#ffffff40']} style={styles.answerTextContainer}>
                <Text style={styles.answerText}>{answer.content}</Text>
                <View style={styles.buttonContainer}>
                    <MoreButton title="Continue Reading" />
                </View>
                <PostStats />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: colors.textColor,
        marginBottom: 10
    },
    userArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    imageContainer: {
        paddingRight: 10    
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    requestContainer: {
        // borderRadius: 100,
        // borderColor: colors.lightBlue,
        // borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        alignSelf: 'center',
    },
    // moreButton: {
    //     alignSelf: 'center',
    //     width: 40,
    //     height: 40,
    //     fontSize: 11,
    //     backgroundColor: 'transparent',
    // },
    answerTextContainer: {
        // backgroundColor: '#000'
    },  
    fadeContainer: {
        backgroundColor: '#eeeeee80',
        padding: 10,
        position: 'absolute',
        bottom: -5,
        width: 350,
        marginBottom: 30
    },
    updatedAt: {
        fontSize: 10
    }
})

export default AnswerBlocks