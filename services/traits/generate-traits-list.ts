import last from 'lodash.last'
import {RawTrait, Trait} from '../../types'

export const INTERESTING_TRAIT_MAX_COUNT = 2

export function generateTraitsList(rawTraits: RawTrait[]): Trait[] {
  return rawTraits
    .map((trait) => ({
      name: trait.name,
      maxCount: last(trait.effects)?.minUnits ?? 0
    }))
    .filter((trait) => (trait.maxCount != null) ? trait.maxCount >= INTERESTING_TRAIT_MAX_COUNT : false)
    // Need to filter traits by maxCount to make sure
    // that only the most interesting traits are displayed
    .map((trait) => ({
      name: trait.name,
      maxCount: trait.maxCount
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
