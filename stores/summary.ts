import {action, computed, map} from 'nanostores'
import {SummaryStore} from '../types'
import {getOptimality} from '../services/summary/get-optimality'
import {getDefaultSummary} from '../services/summary/get-default-summary'
import {traitsList} from '../constants/traits-list'

export const summaryStore = map<SummaryStore>(getDefaultSummary(traitsList))
export const optimalityStore = computed(summaryStore,
  (store) => getOptimality(store, traitsList)
)

export const increaseTrait = action(summaryStore,
  'increaseTrait',
  (store, traitName) => {
    const previousCount = store.get()[traitName]

    store.setKey(traitName, previousCount + 1)
  })
