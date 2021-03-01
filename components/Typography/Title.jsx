import React from 'react'

export default function Title(props) {
  return (
    <h3 
      className={`
        ${props.color? props.color : 'text-purpule'}
        text-5xl
        py-10
      `}>
      {props.title || 'بدون عنوان'}
    </h3>
  )
}
