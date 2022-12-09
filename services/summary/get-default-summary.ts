import {SummaryStore, Trait} from '../../types'

export function getDefaultSummary(traitsList: Trait[]): SummaryStore {
  return traitsList.reduce((acc, trait) => {
    return {
      ...acc,
      [trait.name]: 0
    }
  }, {})
}
