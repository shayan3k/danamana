import React, {useState} from 'react'

// componenets
import PrimaryButton from '../Buttons/PrimaryButton'
import Title from '../Typography/Title'
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
      <div className="absolute top-5 right-5">
        <Title title={props.title}/>
      </div>
      <form onSubmit={submit}>
        <div className=" flex justify-between items-center">
          <div>
            <input 
              name="title"
              onChange={onchange}
              className="rounded-2xl border border-black border-opacity-60 p-3 w-full"
              type="text"
              placeholder="موضوع"/>
          </div>
          <img className="page-image" src="/assets/img/babybos.png" alt=""/>
        </div>
        <textarea
          style={{resize: 'none', height: '200px'}}
          name="text"
          onChange={onchange}
          className="details rounded-2xl border border-black border-opacity-60 p-3 w-full"
          placeholder="جزئیات"></textarea>
          <div className="text-center w-full mt-10">
            <PrimaryButton type="submit" text="ثبت درخواست " />
          </div>
      </form>
    </div>
  )
}
