import * as R from 'ramda'
import { getChoiceStateIndex } from './domain'

export const defaultFormState = {
  questions: [
    {
      title: 'How would you rate the support you received',
      numberOfChoices: 3,
      choices: [
        { value: 5, label: 'Very good' },
        { value: 4, label: 'Good' },
        { value: 3, label: 'So So' },
        { value: 2, label: 'Bad' },
        { value: 1, label: 'Very bad' }
      ]
    }
  ]
}

const reducer = (state, { type, payload }) => {
  if (type === 'CHANGE_CHOICE_VALUE') {
    const question = R.path(['questions', payload.questionIndex], state)
    const choiceStateIndex = getChoiceStateIndex(question.numberOfChoices, payload.choiceIndex)
    return R.set(
      R.lensPath(['questions', payload.questionIndex, 'choices', choiceStateIndex, 'label']),
      payload.value,
      state
    )
  }

  if (type === 'CHANGE_NUMBER_OF_CHOICES') {
    return R.set(
      R.lensPath(['questions', payload.questionIndex, 'numberOfChoices']),
      payload.value,
      state
    )
  }

  return state
}

export default reducer
