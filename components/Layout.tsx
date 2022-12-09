import {ReactElement, ReactNode} from 'react'
import {Box} from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props): ReactElement => {
  return (
    <Box bg='blackAlpha.200'>
      <Box m='auto' maxWidth={600} p={4}>
        <Header/>

        <Box mb={4}>
          {children}
        </Box>

        <Footer/>
      </Box>
    </Box>
  )
}

export default Layout
