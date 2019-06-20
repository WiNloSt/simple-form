import React from 'react'
import { LabeledInput } from '../uiKits/LabeledInput'
import { useSimpleForm } from '../libs/simpleForm/hooks'
import { selectChoiceByIndex } from '../survey/selector'

export function QuestionChoice({ questionIndex, choiceIndex }) {
  const { getState, dispatch } = useSimpleForm()
  const choice = selectChoiceByIndex(getState(), questionIndex, choiceIndex)

  console.log('props', getState(), questionIndex, choiceIndex)
  console.log('choice', choice)
  return (
    <LabeledInput
      label={choice.value}
      value={choice.label}
      onChange={e =>
        dispatch({
          type: 'CHANGE_CHOICE_VALUE',
          payload: {
            questionIndex,
            choiceIndex,
            value: e.target.value
          }
        })
      }
    />
  )
}
