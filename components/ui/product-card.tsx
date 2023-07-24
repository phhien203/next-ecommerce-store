'use client'

import { ExpandIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Currency from '@/components/ui/currency'
import IconButton from '@/components/ui/icon-button'
import useCart from '@/hooks/use-cart'
import usePreviewModal from '@/hooks/use-preview-modal'
import { Product } from '@/types'

export default function ProductCard({ data }: { data: Product }) {
  const previewModal = usePreviewModal()
  const router = useRouter()
  const cart = useCart()

  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }

  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  }

  return (
    <div
      className="cursor-pointer bg-white rounded-xl border p-3 group space-y-4"
      onClick={handleClick}
    >
      {/* images and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square rounded-md object-cover"
        />

        <div className="opacity-0 group-hover:opacity-100 absolute transition w-full px-6 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<ExpandIcon size={20} className="text-gray-600" />}
            />

            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCartIcon size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}
