import {ReactElement} from 'react'
import {useStore} from '@nanostores/react'
import {optimalityStore} from '../stores/summary'
import {Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from '@chakra-ui/react'
import Card from './Card'

export function SummaryTable(): ReactElement {
  const optimality = useStore(optimalityStore)

  return (
    <Card
      title='2. Look at &quot;Opt&quot; coefficient to see which trait is the <i>least</i> collectible. The smaller the better!'
    >
      <TableContainer>
        <Table
          colorScheme='gray'
          size='sm'
          variant='striped'
        >
          <Thead>
            <Tr>
              <Th>Trait</Th>
              <Th>Sum</Th>
              <Th>Max</Th>
              <Th>Opt</Th>
            </Tr>
          </Thead>
          <Tbody>
            {optimality.map((trait) => (
              <Tr key={trait.name}>
                <Td>{trait.name}</Td>
                <Td>{trait.count}</Td>
                <Td>{trait.maxCount}</Td>
                <Td>{trait.optimality}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Trait</Th>
              <Th>Sum</Th>
              <Th>Max</Th>
              <Th>Opt</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Card>
  )
}
