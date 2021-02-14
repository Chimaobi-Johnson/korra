import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import PostActions from '../components/Post/PostActions';
import RelatedGroups from '../components/Post/RelatedGroups';
import Header from '../components/UI/Header';
import QuestionBar from '../components/Question/QuestionBar';
import AnswerBlock from '../components/Question/AnswerBlock';
import colors from '../theme/colors';

const QuestionMainFeed = props => {

    const question = props.navigation.getParam("question");
    
    return (
            <ScrollView style={styles.wrapper}>
                <View style={styles.questionSection}>
                    <Header text={question} />
                </View>
                <QuestionBar />
                <Text style={styles.upperText}>100+ Answers</Text>
                <AnswerBlock />
                <AnswerBlock />
                <AnswerBlock />
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