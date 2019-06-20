import * as R from 'ramda'

export const defaultFormState = {
  numberOfChoices: 3,
  choices: [
    { value: 5, label: 'Very good' },
    { value: 4, label: 'Good' },
    { value: 3, label: 'So So' },
    { value: 2, label: 'Bad' },
    { value: 1, label: 'Very bad' }
  ]
}

const reducer = (state, { type, payload }) => {
  if (type === 'CHANGE_CHOICE_VALUE') {
    return setNewState(payload, state)
  }

  if (type === 'CHANGE_NUMBER_OF_CHOICES') {
    return setNewState(payload, state)
  }

  return state
}

export default reducer

function setNewState(payload, state) {
  return R.set(R.lensPath(payload.field), payload.value, state)
}
