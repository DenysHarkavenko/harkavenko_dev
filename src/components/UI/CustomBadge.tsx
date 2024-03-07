import { Badge } from '@chakra-ui/react'
import { ReactNode } from 'react'

type CustomBadgeProps = {
  children: ReactNode
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ children }) => {
  return (
    <Badge
      p='6px 16px'
      borderRadius='12px'
      bg='#243647'
      color='#fff'
      textTransform='none'
      m='12px 12px 0  0'
      fontSize='14px'
    >
      {children}
    </Badge>
  )
}

export default CustomBadge
