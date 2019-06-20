import React from 'react'
import { useSimpleForm } from './libs/simpleForm/hooks'
import { PrimaryChoices } from './components/PrimaryChoices'

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
