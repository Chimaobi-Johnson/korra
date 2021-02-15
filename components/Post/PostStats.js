import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { faArrowAltCircleUp, faArrowUp, faComment, faCommentAlt, faShare, faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Axios from 'axios';
import { APP_URL } from '../../config';



const PostStats = ({ userId, questionId }) => {

    const upVoteQuestion = () => {
        Axios.post(`${APP_URL}/upvote/question`, { userId, questionId })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err)
        })
    }
    
    return (
        <View style={styles.wrapper}>
            <View style={styles.leftContainer}>
                <View onClick={upVoteQuestion} style={styles.upVote}>
                    <Text><FontAwesomeIcon icon={faArrowUp} /></Text>
                    <Text style={styles.values}>452</Text>
                </View>
                <View style={styles.comments}>
                    <Text><FontAwesomeIcon icon={faCommentAlt} /></Text>
                    <Text style={styles.values}>13</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text><FontAwesomeIcon icon={faShareAlt} /></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        paddingTop: 10,
        marginTop: 10,
        borderTopColor: "#ccc",
        borderStyle: 'solid',
        borderTopWidth: .5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    upVote: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    comments: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    values: {
        paddingBottom: 5,
        fontSize: 11,
        paddingLeft: 5,
        paddingRight: 5
    }
})

export default PostStats