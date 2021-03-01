import React from 'react'

export default function PrimaryButton(props) {
  return (
    <button
      type={props.type}
      className={`
        text-3xl
        text-white
        border-0
        outline-none
        bg-success
        py-5
        px-14
        w-full
        rounded
      `}
    >
      {props.text}
    </button>
  )
}
