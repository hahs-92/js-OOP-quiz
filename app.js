//@ts-check

//questions
import {questions} from './data/questions.js'
import {Quiz} from './models/Quiz.js'
import {Ui} from './models/Ui.js'


/**
 *
 * @param {Quiz} quiz
 * @param {Ui} ui
 */
const renderPage = (quiz, ui) => {
    if(quiz.isEnded()) {
        ui.showScore(quiz.score)
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoise) => {
            quiz.guess(currentChoise)

            renderPage(quiz, ui)
        })
    }
}


function main() {
    const quiz = new Quiz(questions)
    const ui = new Ui()

    renderPage(quiz, ui)

}

main()