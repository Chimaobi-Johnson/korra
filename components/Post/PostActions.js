import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { faArrowAltCircleUp, faArrowDown, faArrowUp, faComment, faCommentAlt, faRetweet, faShare, faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



const PostStats = props => {
    
    return (
        <View style={styles.wrapper}>
                <View style={styles.upVote}>
                    <Text><FontAwesomeIcon icon={faArrowUp} /></Text>
                    <Text style={styles.values}>6.8k</Text>
                </View>
                <View style={styles.comments}>
                    <Text><FontAwesomeIcon icon={faCommentAlt} /></Text>
                    <Text style={styles.values}>18</Text>
                </View>
                <View style={styles.comments}>
                    <Text><FontAwesomeIcon icon={faRetweet} /></Text>
                    <Text style={styles.values}>18</Text>
                </View>
                <View style={styles.downVote}>
                    <Text><FontAwesomeIcon icon={faArrowDown} /></Text>
                    <Text style={styles.values}>2</Text>
                </View>
                <View style={styles.share}>
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
        // borderTopColor: "#ccc",
        // borderStyle: 'solid',
        // borderTopWidth: .5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    upVote: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    downVote: {
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