import React, {useState} from 'react'

// componenets
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Moshavere(props) {

  const [message, setMessage] = useState('')

  const onchange = (event) => {
    let inputValue = event.target.value
    let inputName = event.target.name
    setMessage(prev => ({...prev, [inputName]: inputValue}))
  }
  const submit = (event) => {
    event.preventDefault()
    console.log('message',message);
  }

  return (
    <div
      className="bkg dir-r text-2xl p-4 relative h-full"
      style={{
        background: 'url(/assets/img/dreamy-soft-clouds.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h3 className="text-5xl text-purpule absolute top-10 right-5">{props.title || 'بدون عنوان'}</h3>
      <form onSubmit={submit}>
        <div className=" flex justify-between items-center">
          <div>
            <input 
              name="title"
              onChange={onchange}
              className="rounded p-3"
              type="text"
              placeholder="موضوع"/>
          </div>
          <img className="page-image" src="/assets/img/babybos.png" alt=""/>
        </div>
        <textarea 
          name="text"
          onChange={onchange}
          className="details rounded p-3 w-full"
          placeholder="جزئیات"></textarea>
          <div className="text-center w-full my-6">
            <PrimaryButton type="submit" text="ثبت درخواست " />
          </div>
      </form>
    </div>
  )
}
