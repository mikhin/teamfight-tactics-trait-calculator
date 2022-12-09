import {suite} from 'uvu'
import * as assert from 'uvu/assert'
import {getOptimality} from './get-optimality'
import {map} from 'nanostores'
import {SummaryStore, Trait} from '../../types'

const Suite = suite('src/services/summary/get-optimality')

Suite('Get optimality', () => {
  const store = map<SummaryStore>({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5
  })

  const traitsList: Trait[] = [
    {
      name: '1',
      maxCount: 1
    },
    {
      name: '2',
      maxCount: 2
    },
    {
      name: '3',
      maxCount: 3
    },
    {
      name: '4',
      maxCount: 4
    },
    {
      name: '5',
      maxCount: 5
    }
  ]

  assert.equal(getOptimality(store.get(), traitsList), [
    {
      name: '5',
      maxCount: 5,
      count: 5,
      optimality: '1.0'
    },
    {
      name: '4',
      maxCount: 4,
      count: 4,
      optimality: '1.8'
    },
    {
      name: '3',
      maxCount: 3,
      count: 3,
      optimality: '2.6'
    },
    {
      name: '2',
      maxCount: 2,
      count: 2,
      optimality: '3.4'
    },
    {
      name: '1',
      maxCount: 1,
      count: 1,
      optimality: '4.2'
    }
  ])
})

Suite.run()
