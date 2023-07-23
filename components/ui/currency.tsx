'use client'

import React from 'react'

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function Currency({ value }: { value?: string | number }) {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>
}
