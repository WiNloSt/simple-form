import { useContext } from 'react'
import simpleFormContext from './context'

export const useSimpleForm = () => {
  return useContext(simpleFormContext)
}
