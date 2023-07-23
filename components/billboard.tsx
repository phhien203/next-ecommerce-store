import { Billboard as BillboardType } from '@/types'

export default function Billboard({ data }: { data: BillboardType }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="relative aspect-square rounded-xl md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}
