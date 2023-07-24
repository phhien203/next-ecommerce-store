'use client'

import Currency from '@/components/ui/currency'
import IconButton from '@/components/ui/icon-button'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
import { XIcon } from 'lucide-react'
import Image from 'next/image'

export default function CartItem({ data }: { data: Product }) {
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 sm:h-48 w-24 sm:w-48 rounded-md overflow-hidden">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton onClick={onRemove} icon={<XIcon size={15} />} />
        </div>

        <div className="relative pr-9 sm:pr-0 sm:grid sm:grid-cols-2 sm:gap-x-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="flex mt-1 text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.color.name}
            </p>
          </div>

          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}
