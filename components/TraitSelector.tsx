import {ReactElement} from 'react'
import {traitsList} from '../constants/traits-list'
import TraitSelectorAction from './TraitSelectorAction'
import {List, ListItem} from '@chakra-ui/react'
import Card from './Card'

export function TraitSelector(): ReactElement {
  return (
    <Card
      mb={4}
      title='1. Tap the traits your opponents have'
    >
      <List
        display='grid'
        gridColumnGap={3}
        gridRowGap={3}
        gridTemplateColumns='repeat(auto-fill, minmax(100px, 1fr))'
      >
        {traitsList.map((trait) => (
          <ListItem
            key={trait.name}
          >
            <TraitSelectorAction traitName={trait.name}/>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
