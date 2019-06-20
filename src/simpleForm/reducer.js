import * as R from 'ramda'

const reducer = (state, { type, payload }) => {
  if (type === 'CHANGE_CHOICE_VALUE') {
    return setNewState(payload, state)
  }

  if (type === 'CHANGE_NUMBER_OF_CHOICES') {
    return setNewState(payload, state)
  }

  return state
}

export default reducer

function setNewState(payload, state) {
  return R.set(R.lensPath(payload.field), payload.value, state)
}
