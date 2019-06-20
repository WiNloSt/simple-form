import React from 'react'
import { LabeledInput } from '../uiKits/LabeledInput'
import { useSimpleForm } from '../libs/simpleForm/hooks'

export function QuestionChoice({ fieldPath }) {
  const { getFieldValue, dispatch } = useSimpleForm()
  const fieldValue = getFieldValue(fieldPath)

  return (
    <LabeledInput
      label={fieldValue.value}
      value={fieldValue.label}
      onChange={e =>
        dispatch({
          type: 'CHANGE_CHOICE_VALUE',
          payload: {
            field: fieldPath.concat('label'),
            value: e.target.value
          }
        })
      }
    />
  )
}
