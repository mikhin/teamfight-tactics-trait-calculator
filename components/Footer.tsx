import {ReactElement} from 'react'
import Card from './Card'
import {Link} from '@chakra-ui/react'

const Footer = (): ReactElement => {
  return (
    <Card
      display='flex'
    >
      Made by Yuri Mikhin.
      {''}
      <Link
        href='https://github.com/mikhin/teamfight-tactics-trait-calculator'
        isExternal
      >
        Source code.
      </Link>
    </Card>
  )
}

export default Footer
