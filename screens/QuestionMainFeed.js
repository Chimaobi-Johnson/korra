import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import PostActions from '../components/Post/PostActions';
import RelatedGroups from '../components/Post/RelatedGroups';
import Header from '../components/UI/Header';
import QuestionBar from '../components/Question/QuestionBar';
import AnswerBlock from '../components/Question/AnswerBlock';
import colors from '../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

const QuestionMainFeed = props => {
    const dispatch = useDispatch();
    const question = props.navigation.getParam("question");
    const questionId = props.navigation.getParam("questionId");

    useEffect(() => {
        dispatch(actions.fetchAnswers({ questionId }))
    }, [])
    
    const data = useSelector(state => state.app.answers);

    if(!data.data) {
        return <Text>Loading...</Text>
    }
    return (
            <ScrollView style={styles.wrapper}>
                <View style={styles.questionSection}>
                    <Header text={question} />
                </View>
                <QuestionBar questionId={questionId} />
                <Text style={styles.upperText}>{data.data.answers.length} Answers</Text>
                {data.data.answers.length != 0 ? data.data.answers.map(answer => (
                  <AnswerBlock key={answer._id} answer={answer} />
                )) : 'No answers for this question yet'}

            </ScrollView>
    )
}

QuestionMainFeed.navigationOptions = {
    headerTitle: 'Answers'
}


const styles = StyleSheet.create({
    wrapper: {

    },
    questionSection: {
        padding: 10,
        backgroundColor: colors.textColor
    },
    upperText: {
        borderBottomColor: '#eaeaea',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: colors.textColor
    }
})

export default QuestionMainFeed