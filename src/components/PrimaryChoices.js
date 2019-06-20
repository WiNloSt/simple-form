import React from 'react'
import { useSimpleForm } from '../libs/simpleForm/hooks'
import { QuestionChoice } from './QuestionChoice'
import { selectPrimaryQuestionChoiceByIndex } from '../survey/selector'
export function PrimaryChoices() {
  const { getFieldValue } = useSimpleForm()
  const numberOfChoices = getFieldValue(['numberOfChoices'])

  return (
    <div>
      {Array.from(Array(numberOfChoices)).map((_, index) => {
        const choicesStateIndex = selectPrimaryQuestionChoiceByIndex(getFieldValue([]), index)
        console.log(choicesStateIndex)
        return <QuestionChoice fieldPath={['choices', choicesStateIndex]} />
      })}
    </div>
  )
}
