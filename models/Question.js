//@ts-check
export class Question {

    /**
     *
     * @param {string} text This is the text of the question
     * @param {string[]} choices This is the choise of the questions
     * @param {string} answer This is the answer of the question
     */


    constructor(text, choices, answer) {
        this.text = text;
        this.choices= choices
        this.answer = answer
    }

    /**
     *
     * @param {string} choice name text to guess
     * @returns { boolean} return true if the answer is correct
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}
