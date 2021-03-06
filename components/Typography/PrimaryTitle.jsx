import React from 'react'

export default function PrimaryTitle(props) {
  return (
    <h3 
      className={`
        text-5xl
        text-purpule
        absolute
        top-10
        right-5
        text-${props.color ? props.color : 'purple-700'}
      `}>
        {props.title || 'بدون عنوان'}
      </h3>
  )
}
