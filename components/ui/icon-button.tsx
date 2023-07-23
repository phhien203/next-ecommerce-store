import { cn } from '@/lib/utils'
import { MouseEventHandler } from 'react'

export default function IconButton({
  onClick,
  className,
  icon,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
  icon: React.ReactElement
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-full bg-white border shadow-md p-2 hover:scale-110 transition',
        className,
      )}
    >
      {icon}
    </button>
  )
}
