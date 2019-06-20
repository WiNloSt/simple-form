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
