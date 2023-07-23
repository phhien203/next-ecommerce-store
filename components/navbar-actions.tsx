'use client'

import Button from '@/components/ui/button'
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

export default function NavbarActions() {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBagIcon size={20} color="white" />
        <span className="ml-2 text-sm text-white font-medium">0</span>
      </Button>
    </div>
  )
}
