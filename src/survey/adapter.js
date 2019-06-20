import * as R from 'ramda'

function indexReducer(surveyData, index) {
  return R.over(
    R.lensPath(['questions', index, 'choices']),
    R.sort((a, b) => b.value - a.value),
    surveyData
  )
}

export const sortChoices = surveyData => {
  return surveyData.questions.map((_, index) => index).reduce(indexReducer, surveyData)
}
