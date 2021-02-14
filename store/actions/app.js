import axios from 'axios';
import { APP_URL } from '../../config';
import { 
    FETCH_ANSWER, 
    FETCH_ANSWERS, 
    FETCH_ANSWERS_FAIL, 
    FETCH_ANSWERS_SUCCESS,
    FETCH_ANSWER_FAIL,
    FETCH_ANSWER_SUCCESS, 
    FETCH_COMMENT, 
    FETCH_COMMENTS, 
    FETCH_COMMENTS_FAIL,
    FETCH_COMMENTS_SUCCESS, 
    FETCH_COMMENT_FAIL,
    FETCH_COMMENT_SUCCESS, 
    FETCH_QUESTIONS, 
    FETCH_QUESTIONS_FAIL,
    FETCH_QUESTIONS_SUCCESS
 } from "./actionTypes"

export const fetchQuestions = () => dispatch => {
        dispatch({ type: FETCH_QUESTIONS });
        axios.get(`${APP_URL}/questions`)
        .then(response => {
            console.log(response)
            dispatch(fetchQuestionsSuccess(response))
        })
        .catch(err => {
            console.log(err.response)
            dispatch(fetchQuestionsFail(err))
        })
} 

export const fetchQuestionsFail = (err) => {
    return {
        type: FETCH_QUESTIONS_FAIL,
        payload: err
    }
} 


export const fetchQuestionsSuccess = (data) => {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        payload: data
    }
} 


export const fetchQuestion = () => {
    return {
        type: FETCH_QUESTION
    }
} 

export const fetchQuestionSuccess = () => {
    return {
        type: FETCH_QUESTION_SUCCESS
    }
} 

export const fetchQuestionFail = () => {
    return {
        type: FETCH_QUESTION_FAIL
    }
} 

export const fetchAnswers = () => {
    return {
        type: FETCH_ANSWERS
    }
} 

export const fetchAnswersFail = () => {
    return {
        type: FETCH_ANSWERS_FAIL
    }
} 

export const fetchAnswersSuccess = () => {
    return {
        type: FETCH_ANSWERS_SUCCESS
    }
} 

export const fetchAnswer = () => {
    return {
        type: FETCH_ANSWER
    }
} 

export const fetchAnswerFail = () => {
    return {
        type: FETCH_ANSWER_FAIL
    }
} 

export const fetchAnswerSuccess = () => {
    return {
        type: FETCH_ANSWER_SUCCESS
    }
} 


export const fetchComments = () => {
    return {
        type: FETCH_COMMENTS
    }
} 

export const fetchCommentsFail = () => {
    return {
        type: FETCH_COMMENTS_FAIL
    }
} 

export const fetchCommentsSuccess = () => {
    return {
        type: FETCH_COMMENTS_SUCCESS
    }
} 

export const fetchComment = () => {
    return {
        type: FETCH_COMMENT
    }
} 

export const fetchCommentFail = () => {
    return {
        type: FETCH_COMMENT_FAIL
    }
} 

export const fetchCommentSuccess = () => {
    return {
        type: FETCH_COMMENT_SUCCESS
    }
} 
