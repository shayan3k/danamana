import React from 'react'

import Link from 'next/link'



export default function CategoryRow(props) {
  return (
    <Link href="/">
      <div
        className={`
          rtl
          rounded
          shadow-xxs
          justify-end
          flex
          px-20
          py-5
          text-4xl
          my-7
          mx-10
          cursor-pointer
          text-${props.color ? porps.color : 'yellow-300'}
        `}>
          <div>{props.text || 'تعویض لاوزم ورزشی'}</div>
          <div className="pl-10">{props.icon}</div>
      </div>
    </Link>
  )
}
