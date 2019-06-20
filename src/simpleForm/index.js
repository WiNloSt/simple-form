import React, { useReducer } from 'react'
import * as R from 'ramda'

import reducer from './reducer'
import simpleFormContext from './context'

/**
 *
 * @param {Object} props
 * @param {JSX.Element| React.ReactFragment} props.children
 * @param {{}} props.initialValue initial value for form
 */
export const SimpleForm = ({ children, initialValue = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const getFieldValue = path => R.path(path, state)
  return (
    <simpleFormContext.Provider value={{ dispatch, getFieldValue }}>
      {children}
    </simpleFormContext.Provider>
  )
}
