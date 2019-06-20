import * as R from 'ramda'

export const selectQuestions = state => {
  return state.questions
}

export const selectQuestion = (state, questionIndex) => {
  return selectQuestions(state)[questionIndex]
}

export const selectChoiceByIndex = (state, questionIndex, choiceIndex) => {
  const index = selectPrimaryQuestionChoiceIndexByIndex(state, questionIndex, choiceIndex)

  const question = state.questions[questionIndex]
  return question.choices[index]
}

const selectPrimaryQuestionChoiceIndexByIndex = (state, questionIndex, choiceIndex) => {
  const question = state.questions[questionIndex]
  const { numberOfChoices } = question
  const mapping = {
    2: [2, 4],
    3: [2, 3, 4],
    4: [2, 3, 4, 5],
    5: [1, 2, 3, 4, 5]
  }
  const targetChoiceValue = mapping[numberOfChoices][choiceIndex]
  return question.choices.findIndex(R.propEq('value', targetChoiceValue))
}
