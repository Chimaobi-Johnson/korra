import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PostStats from './PostStats';



const Post = props => {

    // const randomImage = 'https://picsum.photos/400';
    const randomMale = 'https://randomuser.me/api/portraits/men/91.jpg';
    
    return (
        <View style={styles.wrapper}>
            <View style={styles.recommendation}>
                <Text style={styles.recommendationText}>Answer Recommended to you</Text>
                <Text><FontAwesomeIcon style={styles.recommendationIcon} icon={faTimes} /></Text>
            </View>
            <View style={styles.userContainer}>
                <View style={styles.profilePicture}>
                    <Image style={styles.profileImage} source={{ uri: randomMale }} />
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.heading2}>Chimaobi Wogu</Text>
                    <Text style={styles.email}>Chimaobi.dev@gmail.com</Text>
                    <Text style={styles.country}>Nigeria</Text>
                </View>
            </View>
            <View>
                <Text style={styles.heading}>If education in Germany is free and good, then why doesn't everybody go there to study?</Text>
                <Text>The problem with this question is, a lot of people do want to study in Germany. 
                    Medical school in Germany is free. That’s incredible. People know this and therefore apply 
                    to study here. And because competition is so fierce, only students in the top ...read more</Text>
            </View>
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