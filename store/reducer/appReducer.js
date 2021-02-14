import * as actionTypes from "../actions/actionTypes";

const initialState = {
    questions: {
        data: null,
        status: null,
        loading: false
    },
    question: {
        data: null,
        status: null,
        loading: false
    },
    mainAnswer: {
        data: null,
        status: null,
        loading: false
    },
    answers: {
        data: null,
        status: null,
        loading: false
    },
    answer: {
        data: null,
        status: null,
        loading: false
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_QUESTION:
            return {
                ...state,
                question: {
                    ...state.question,
                    data: null,
                    status: null,
                    loading: true
                }
            }
        case actionTypes.FETCH_QUESTION_SUCCESS:
            return {
                ...state,
                question: {
                    ...state.question,
                    data: action.payload.data,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_QUESTION_FAIL: 
            return {
                ...state,
                question: {
                    ...state.question,
                    data: null,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_QUESTIONS:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    data: null,
                    status: null,
                    loading: true
                }
            }
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    data: action.payload.data.questions,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_QUESTIONS_FAIL:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    data: null,
                    status: action.payload.status,
                    loading: false
                }
            }
            case actionTypes.FETCH_MAIN_ANSWER:
            return {
                ...state,
                mainAnswer: {
                    ...state.mainAnswer,
                    data: null,
                    status: null,
                    loading: true
                }
            }
        case actionTypes.FETCH_MAIN_ANSWER_SUCCESS:
            return {
                ...state,
                mainAnswer: {
                    ...state.mainAnswer,
                    data: action.payload.data,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_MAIN_ANSWER_FAIL: 
            return {
                ...state,
                mainAnswer: {
                    ...state.mainAnswer,
                    data: null,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_ANSWER:
            return {
                ...state,
                answer: {
                    ...state.answer,
                    data: null,
                    status: null,
                    loading: true
                }
            }
        case actionTypes.FETCH_ANSWER_SUCCESS:
            return {
                ...state,
                answer: {
                    ...state.answer,
                    data: action.payload.data,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_ANSWER_FAIL: 
            return {
                ...state,
                answer: {
                    ...state.answer,
                    data: null,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_ANSWERS:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    data: null,
                    status: null,
                    loading: true
                }
            }
        case actionTypes.FETCH_ANSWERS_SUCCESS:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    data: action.payload.data,
                    status: action.payload.status,
                    loading: false
                }
            }
        case actionTypes.FETCH_ANSWERS_FAIL:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    data: null,
                    status: action.payload.status,
                    loading: false
                }
            }
        default:
         return state
    }
}
