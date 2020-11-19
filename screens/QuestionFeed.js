import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PostActions from '../components/Post/PostActions';
import RelatedGroups from '../components/Post/RelatedGroups';

const QuestionFeed = props => {
    const questionId = props.navigation.getParam("questionId");
    return (
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("QuestionFeed")}><Text style={styles.heading}>Display here</Text></TouchableOpacity>
                    <View style={styles.topAnswer}>
                        <Text>
                        They see beyond first impressions and always know that there’s far more to a person than meets the eye. Everyone has their own story and they aren’t quick to judge someone until they feel they know them.

                            They know themselves. They know what’s good for them and they know what isn’t so good to have in their lives. They understand what makes them thrive and what drags them down. They forgive themselves if they fuck up from time to time too.

                            They probably don’t gossip or, if they do listen to gossip, they are hesitant to bad-mouth someone who isn’t there to defend themselves. They know that problems are better faced head on.

                            They know they have their weaknesses and strengths and play to them. That’s not to say they don’t seek self-improvement, but they know what comes naturally to them and what they find more difficult.

                            They are appreciative of everything and don’t lose sight of the most important things. Their family and friends, having a house, food in the fridge, a bed to sleep in etc. Most things else are a bonus and they try to remain humble and grounded.

                            They ask for advice when they need it and they give advice when they feel someone else will benefit from it. They aren’t afraid to admit they don’t know or understand something, and vice versa they don’t judge or demean others for not knowing something
                        </Text>
                    </View>
                    <PostActions />
                </View>
                <View style={styles.otherCommentsContainer}>
                    <Text style={styles.otherComments}>175 comments from Josh Velson and more</Text>
                </View>
                
                <RelatedGroups />
                
            </View>
    )
}

QuestionFeed.navigationOptions = {
    headerTitle: 'Top Answer'
}

const styles = StyleSheet.create({
    wrapper: {

    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textWrapper: {
        backgroundColor: 'white',
        padding: 10
    },
    topAnswer: {
        paddingTop: 20
    },
    otherCommentsContainer: {
        backgroundColor: '#f5f5f5',
        marginBottom: 20
    },
    otherComments: {
        padding: 10,
        fontSize: 11
    }
})

export default QuestionFeed