import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PostActions from '../components/Post/PostActions';
import RelatedGroups from '../components/Post/RelatedGroups';
import * as actions from '../store/actions';

const QuestionFeed = props => {
    const dispatch = useDispatch();
    const questionId = props.navigation.getParam("questionId");
    const question = props.navigation.getParam("question");
    useEffect(() => {
        dispatch(actions.fetchMainAnswer({questionId}));
    }, [])
    const data = useSelector(state => state.app.mainAnswer);

    if(!data.data) {
        return <Text>Loading...</Text>
    }

    const { answer } = data.data;

    return (
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <TouchableOpacity onPress={() => props.navigation.navigate({routeName: 'QuestionFeed', params : {
                        questionId: questionId,
                        question: question
                        }})}>
                    <Text style={styles.heading}>{question}</Text></TouchableOpacity>
                    <View style={styles.topAnswer}>
                        <Text>{answer.content}</Text>
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