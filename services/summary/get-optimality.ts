import {OptimalityStoreItem, SummaryStore, Trait} from '../../types'

const COUNT_BALANCING_FACTOR = 5

export function getOptimality(summary: SummaryStore, traitsList: Trait[]): OptimalityStoreItem[] {
  const traitsSumByMaxCount = [...traitsList].sort((a, b) => a.maxCount - b.maxCount)
  const groupsByMax = new Set(traitsSumByMaxCount.map((trait) => trait.maxCount))

  return traitsSumByMaxCount.map((trait) => {
    const maxCountIndex = [...groupsByMax].reverse().indexOf(trait.maxCount)
    const optimality = maxCountIndex + summary[trait.name] / COUNT_BALANCING_FACTOR

    return {
      ...trait,
      count: summary[trait.name],
      optimality: optimality.toFixed(1)
    }
  }).sort((a, b) => parseFloat(a.optimality) - parseFloat(b.optimality))
}
