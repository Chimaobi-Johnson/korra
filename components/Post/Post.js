import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PostStats from './PostStats';



const Post = ({ question, gotoQuestion }) => {

    // const randomImage = 'https://picsum.photos/400';
    const randomMale = 'https://randomuser.me/api/portraits/men/91.jpg';
    
    return (
            <View key={question._id} style={styles.wrapper}>
                <View style={styles.recommendation}>
                    <Text style={styles.recommendationText}>Answer Recommended to you</Text>
                    <Text><FontAwesomeIcon style={styles.recommendationIcon} icon={faTimes} /></Text>
                </View>
                <TouchableOpacity onPress={() => console.log("clicked")}>
                    <View style={styles.userContainer}>
                        <View style={styles.profilePicture}>
                            <Image style={styles.profileImage} source={question.userDetails.userImage[0] ? question.userDetails.userImage[0] : require('../../assets/images/avatar-1577909_640.png')} />
                        </View>
                        <View style={styles.userDetails}>
                            <Text style={styles.heading2}>{question.userDetails.firstName[0] + ' ' + question.userDetails.lastName[0]}</Text>
                            <Text style={styles.email}>{question.userDetails.userEmail[0]}</Text>
                            <Text style={styles.country}>{question.userDetails.country[0]}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoQuestion}>
                    <View>
                        <Text style={styles.heading}>{question.title}</Text>
                        {/* the first answer is selected because on the backend the answers are sorted by the upvotes 
                        so that the top answer is the most popular */}
                        <Text>{question.answers.length === 0 ? 'This question has no answer yet' : question.answers[0].content}</Text>
                    </View>
                </TouchableOpacity>
                <PostStats />
            </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },
    recommendation: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    recommendationText: {
        fontSize: 10
    },
    recommendationIcon: {
        color: '#ccc'
    },
    userContainer: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center'
    },
    profilePicture: {
        // backgroundColor: 'red'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    userDetails: {
        paddingLeft: 15
    },
    heading: {
        fontWeight: 'bold'
    },
    heading2: {
        fontWeight: 'bold',
        fontSize: 13
    },
    email: {
        fontSize: 12
    },
    country: {
        fontSize: 12
    }
})

export default Post