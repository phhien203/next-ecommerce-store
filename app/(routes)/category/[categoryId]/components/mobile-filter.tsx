'use client'

import Button from '@/components/ui/button'
import IconButton from '@/components/ui/icon-button'
import { Color, Size } from '@/types'
import { Dialog } from '@headlessui/react'
import { PlusIcon, XIcon } from 'lucide-react'
import React from 'react'
import Filter from './filter'

export default function MobileFilter({
  sizes,
  colors,
}: {
  sizes: Size[]
  colors: Color[]
}) {
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <PlusIcon size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* background */}
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        {/* dialog position */}
        <div className="fixed z-40 inset-0 flex">
          <Dialog.Panel className="relative h-full w-full ml-auto flex flex-col max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<XIcon size={15} />} onClick={onClose} />
            </div>

            {/* render the filter */}
            <div className="p-4">
              <Filter name="Sizes" valueKey="sizeId" data={sizes} />
              <Filter name="Colors" valueKey="colorId" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
