import {ReactElement, useCallback} from 'react'
import {increaseTrait} from '../stores/summary'
import {Button, useToast} from '@chakra-ui/react'

interface Props {
  traitName: string
}

const TraitSelectorAction = ({traitName}: Props): ReactElement => {
  const toast = useToast()

  const addToast = useCallback((traitName: string): void => {
    toast({
      description: traitName,
      position: 'top-right'
    })
  }, [toast]);

  const handleClick = useCallback(() => {
    increaseTrait(traitName)
    toast.closeAll()
    addToast(traitName)
  }, [addToast, toast, traitName])

  return (
      <Button
          colorScheme='gray'
          onClick={handleClick}
          size='md'
          type='button'
          variant='solid'
          w='100%'
      >
        {traitName}
      </Button>
  )
}

export default TraitSelectorAction
