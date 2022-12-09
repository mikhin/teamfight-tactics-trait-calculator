import {ReactElement, ReactNode} from 'react'
import {Box, ChakraProps, Heading} from '@chakra-ui/react'

interface Props extends ChakraProps {
  children: ReactNode
  title?: string
}

const Card = ({children, title, ...props}: Props): ReactElement => {
  return (
    <Box
      bg='white'
      borderColor='blackAlpha.100'
      borderRadius='md'
      borderStyle='solid'
      borderWidth={1}
      display='grid'
      gridColumnGap={2}
      p={4}
      shadow='md'
      {...props}
    >
      {(title != null) && (<Heading as='h2' dangerouslySetInnerHTML={{__html: title}} mb={4} size='sm'/>)}

      {children}
    </Box>
  )
}

export default Card
