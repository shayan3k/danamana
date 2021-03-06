import React from 'react'

import Link from 'next/link'



export default function CategoryRow(props) {
  return (
    <Link href="/change">
      <div
        className={`
          rtl
          rounded
          shadow-xxs
          justify-end
          flex
          px-10
          py-5
          text-4xl
          my-7
          cursor-pointer
          text-${props.color ? props.color : 'yellow-500'}
        `}>
          <div>{props.text || 'تعویض لوازم ورزشی'}</div>
          <div className="pl-10">{props.icon}</div>
      </div>
    </Link>
  )
}
