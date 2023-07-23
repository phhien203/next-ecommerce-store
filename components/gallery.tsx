'use client'

import { Tab } from '@headlessui/react'

import GalleryTab from '@/components/gallery-tab'
import { Image as ImageType } from '@/types'
import Image from 'next/image'

export default function Gallery({ images }: { images: ImageType[] }) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl hidden sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square w-full h-full relative overflow-hidden sm:rounded-lg">
              <Image
                fill
                alt="image"
                src={image.url}
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
