import React, {useState} from 'react'

// icons
import {AiOutlinePlusCircle} from 'react-icons/ai'

// componenets
import PrimaryButton from '../Buttons/PrimaryButton'
import PrimaryTitle from '../Typography/PrimaryTitle'

export default function UploadForm(props) {
  const [message, setMessage] = useState('')

  const [uploadImage, setUploadImage] = useState('')

  const onchange = (event) => {
    let inputValue = event.target.value
    let inputName = event.target.name
    setMessage(prev => ({...prev, [inputName]: inputValue}))
  }

  const changeImage = (event) => {
    let reader = new FileReader();
    reader.onload = function()
    {
      setUploadImage(reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
    setMessage(userInfo => ({...userInfo, [event.target.name]: event.target.files[0]}));
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
      <PrimaryTitle title={props.title}/>
      <form className="mt-16" onSubmit={submit}>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex content-center items-center text-center">
              <label
                className="shadow border p-1 mb-3 relative bg-white"
                htmlFor="uploadImage"
              >
                <label  className=" text-8xl absolute-center" htmlFor="uploadImage"><AiOutlinePlusCircle /></label>
                <img style={{ width: "125px", height: "125px"}} src={uploadImage} />
              </label>
              <input
                style={{display: 'none'}}
                id="uploadImage"
                name='upload'
                type="file"
                onChange={changeImage} />
            </div>
            <div className="text-3xl text-center" >آپلود عکس</div>
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
