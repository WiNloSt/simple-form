import * as R from 'ramda'

export const selectPrimaryQuestionChoiceByIndex = (state, index) => {
  const { numberOfChoices } = state
  const mapping = {
    2: [2, 4],
    3: [2, 3, 4],
    4: [2, 3, 4, 5],
    5: [1, 2, 3, 4, 5]
  }
  const targetChoiceValue = mapping[numberOfChoices][index]
  return state.choices.findIndex(R.propEq('value', targetChoiceValue))
}
