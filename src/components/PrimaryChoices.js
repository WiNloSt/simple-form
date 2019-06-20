import React from 'react'
import { useSimpleForm } from '../libs/simpleForm/hooks'
import { QuestionChoice } from './QuestionChoice'
import { selectQuestion } from '../survey/selector'

export function PrimaryChoices({ questionIndex }) {
  const { getState } = useSimpleForm()
  const formState = getState()
  const numberOfChoices = selectQuestion(formState, questionIndex).numberOfChoices

  return (
    <div>
      {Array.from(Array(numberOfChoices)).map((_, choiceIndex) => {
        return (
          <QuestionChoice
            key={choiceIndex}
            questionIndex={questionIndex}
            choiceIndex={choiceIndex}
          />
        )
      })}
    </div>
  )
}
