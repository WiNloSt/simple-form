import React, { useReducer } from 'react'
import reducer from '../../survey/reducer'
import simpleFormContext from './context'

/**
 *
 * @param {Object} props
 * @param {JSX.Element| React.ReactFragment} props.children
 * @param {{}} props.initialValue initial value for form
 */
export const SimpleForm = ({ children, initialValue = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const getState = () => state
  return (
    <simpleFormContext.Provider value={{ dispatch, getState }}>
      {children}
    </simpleFormContext.Provider>
  )
}
