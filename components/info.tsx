'use client'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import { Product } from '@/types'
import { ShoppingCartIcon } from 'lucide-react'

export default function Info({ data }: { data: Product }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="flex items-end justify-between mt-3">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          ></div>
        </div>

        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2">
            Add to cart
            <ShoppingCartIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
