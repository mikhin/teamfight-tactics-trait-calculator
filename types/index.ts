export interface RawTrait {
  apiName: string
  desc: string
  effects: RawTraitEffect[]
  icon: string
  name: string
}

export interface RawTraitEffect {
  maxUnits: number
  minUnits: number
  style: number
}

export interface Trait {
  name: string
  maxCount: number
}

export interface SummaryStore {
  [key: string]: number
}

export interface OptimalityStoreItem {
  name: string
  count: number
  maxCount: number
  optimality: string
}

export interface Champion {
  name: string
  traits: string[]
}
