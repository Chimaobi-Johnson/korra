import questions from "../data/questions";
import answers from "../data/answers";
import users from "../data/users";

class Question {
    constructor(id, title, description, date, topic, answers) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.date = date,
        this.topic = topic,
        this.answers = answers
    }

    displayQuestions () {
        return questions;
    }

    displayQuestion (id) {
        return questions.filter(question => question.id === id)
    }

    displayQuestionsByTopic (topic) {
        return questions.filter(question => question.topic === topic)
    }

    addAnswer (id, answerId) {
        return questions.map(question => {
            if(question.id === id) {
                this.answers.push(answerId);
            } else {
                return
            }
        })
    }

    displayAnswers (id) {
        return questions.map(question => {
            if(question.id === id) {
                return question.answers;
            }
        })
    }

    findUser (id) {
        return users.filter(user => user.id === id)
    }

    renderFeedQuestions () {
        console.log("func called")
       return questions.map(question => {
            const postObj = {
                title: question.title,
                topic: question.topic,
                answers: question.answers
            }
            const user = findUser(userId);
            console.log(user);
            const userName = user.firstName + " " + user.lastName;
            postObj.userName = userName;
            return postObj
        })
    }

}

export default Question;