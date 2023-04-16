import {Heading, Image, Text} from '@chakra-ui/react'
import {ReactElement} from 'react'
import Card from './Card'

const Header = (): ReactElement => {
  return (
    <Card
      mb={4}
    >
      <Heading as='h1' mb={4} size='xl'>
        Teamfight Tactics Traits Calculator
        <br/>
        <small>Set 8.5</small>
      </Heading>

      <Text as='p' gridColumn='1/3' mb={1}>
        Count the traits of your opponents to choose the best comp.
      </Text>

      <Text as='p' gridColumn='1/3'>
        Look the optimal trait count in the table below.
      </Text>

      <Image
        alt='TFT Traits'
        gridColumn={2}
        gridRow='1/3'
        src='/logo.png'
        w={24}
      />
    </Card>
  )
}

export default Header
