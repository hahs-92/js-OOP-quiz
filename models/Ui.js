//@ts-check

export class Ui {
    constructor() {

    }

    /**
     *
     * @description this method render the question in the html
     * @param {string} text
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')

        questionTitle.innerText = text
    }

    /**
     *
     * @param {string[]} choices
     *@param {(arg: string)=> void} cb
     */
    showChoices(choices, cb) {
        const choicesContainer = document.getElementById('choices')

        choicesContainer.innerText =""

        for(let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')

            button.addEventListener('click', () => cb(choices[i]))
            button.innerText = choices[i]
            button.classList.add('Button')
            choicesContainer.append(button)

        }
    }

    /**
     *
     * @param {number} score
     */
    showScore(score) {
        const quizEnd = `
            <h1>Result</h1>
            <h2>Your Score: ${score}</h2>
        `

        const element = document.getElementById("quiz")

        element.innerHTML = quizEnd
    }


    /**
     *
     * @param {number} currentIndex The current index of the quiz
     * @param {number} total the total of questions
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById("progress")

        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}