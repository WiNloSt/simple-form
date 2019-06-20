import { useState, useEffect } from 'react'
import axios from 'axios'
import * as R from 'ramda'

export const useServeyData = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  })

  useEffect(() => {
    axios
      .get('http://localhost:8000/survey')
      .then(res =>
        setState(state =>
          R.merge(state, {
            loading: false,
            data: res.data
          })
        )
      )
      .catch(error =>
        setState(state =>
          R.merge(state, {
            loading: false,
            error
          })
        )
      )
  }, [])

  return state
}
