import {Trait} from '../types'
import {generateTraitsList} from '../services/traits/generate-traits-list'
import rawTraits from '../data/raw-traits.json'

export const traitsList: Trait[] = generateTraitsList(rawTraits)
