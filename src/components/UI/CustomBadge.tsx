import { Badge } from '@chakra-ui/react'
import { ReactNode, useId } from 'react'

type CustomBadgeProps = {
  children: ReactNode
  bg?: string
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  children,
  bg = '#243647',
}) => {
  let key = useId()
  return (
    <Badge
      p='6px 16px'
      borderRadius='12px'
      bg={bg}
      color='#fff'
      textTransform='none'
      m='12px 12px 0  0'
      fontSize='14px'
      key={key}
    >
      {children}
    </Badge>
  )
}

export default CustomBadge
