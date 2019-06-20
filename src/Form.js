import React from 'react'
import { useSimpleForm } from './libs/simpleForm/hooks'
import { PrimaryChoices } from './components/PrimaryChoices'
import { selectQuestions } from './survey/selector'

export function Form() {
  const { getState } = useSimpleForm()

  const questions = selectQuestions(getState())
  return questions.map((question, index) => (
    <Question key={index} question={question} index={index} />
  ))
}

function Question({ question, index: questionIndex }) {
  const { dispatch } = useSimpleForm()
  const actions = {
    changeNumberOfChoices(numberOfChioces) {
      return {
        type: 'CHANGE_NUMBER_OF_CHOICES',
        payload: { questionIndex, value: numberOfChioces }
      }
    }
  }
  return (
    <div className="question">
      <h2>
        {questionIndex + 1}: {question.title}
      </h2>
      <label>choices</label>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(2))}>2</button>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(3))}>3</button>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(4))}>4</button>
      <button onClick={() => dispatch(actions.changeNumberOfChoices(5))}>5</button>

      <PrimaryChoices questionIndex={questionIndex} />
    </div>
  )
}
