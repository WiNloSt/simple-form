function getChoiceValue(numberOfChoices, choiceIndex) {
  return getRatingScale(numberOfChoices)[choiceIndex]
}

function getRatingScale(numberOfChoices) {
  const ratingScaleMap = {
    2: [4, 2],
    3: [4, 3, 2],
    4: [5, 4, 3, 2],
    5: [5, 4, 3, 2, 1]
  }

  return ratingScaleMap[numberOfChoices]
}

export function getChoiceStateIndex(numberOfChoices, choiceIndex) {
  return getChoiceIndexes(numberOfChoices)[choiceIndex]
}

function getChoiceIndexes(numberOfChoices) {
  const choiceIndexMap = {
    2: [3, 1],
    3: [3, 2, 1],
    4: [4, 3, 2, 1],
    5: [4, 3, 2, 1, 0]
  }

  return choiceIndexMap[numberOfChoices]
}
