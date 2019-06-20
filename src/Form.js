import React from 'react'
import { useSimpleForm } from './simpleForm/hooks'
import { QuestionChoice } from './components/QuestionChoice'

export function Form() {
  const { dispatch } = useSimpleForm()
  const actions = {
    changeNumberOfChoices(numberOfChioces) {
      return {
        type: 'CHANGE_NUMBER_OF_CHOICES',
        payload: { field: ['numberOfChoices'], value: numberOfChioces }
      }
    }
  }
  return (
    <>
      <label>choices</label>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(2))}>2</button>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(3))}>3</button>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(4))}>4</button>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(5))}>5</button>

      <PrimaryChoices />
    </>
  )
}

function PrimaryChoices() {
  const { getFieldValue, dispatch } = useSimpleForm()
  const numberOfChoices = getFieldValue(['numberOfChoices'])

  return (
    <div>
      {Array.from(Array(numberOfChoices)).map((_, index) => (
        <QuestionChoice fieldPath={['choices', index]} dispatch={dispatch} />
      ))}
    </div>
  )
}
