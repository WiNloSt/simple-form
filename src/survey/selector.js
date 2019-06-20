import { getChoiceStateIndex } from './domain'

export const selectQuestions = state => {
  return state.questions
}

export const selectQuestion = (state, questionIndex) => {
  return selectQuestions(state)[questionIndex]
}

export const selectChoiceByIndex = (state, questionIndex, choiceIndex) => {
  const numberOfChoices = selectQuestion(state, questionIndex).numberOfChoices
  const choiceStateIndex = getChoiceStateIndex(numberOfChoices, choiceIndex)

  const question = state.questions[questionIndex]
  return question.choices[choiceStateIndex]
}
