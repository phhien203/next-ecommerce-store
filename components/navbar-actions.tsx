'use client'

import { ShoppingBagIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import Button from '@/components/ui/button'
import useCart from '@/hooks/use-cart'

export default function NavbarActions() {
  const [isMounted, setIsMounted] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBagIcon size={20} color="white" />

        <span className="ml-2 text-sm text-white font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}
