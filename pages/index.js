import React , {useState} from "react";

// components
import Layout from '../components/Layouts/LayoutMain.jsx'
import Cart from '../components/Carts/CartRow'

// OwlCarousel
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {

  const [data, setCard] = useState([
    {title: 'متن پیشنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: ' پیشنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن پیشنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متا ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن پیها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن نها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
  ])

  return (
      <div
        className="bkg dir-r text-2xl p-4 relative mb-32"
        style={{
          background: 'url(/assets/img/christmas-winter.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      > 
      <div className="">
        <img className="mx-auto" src="/assets/img/bear.png" alt=""/>
      </div>
      <div className="relative text-center">
        <img className="mx-auto red-title" src="/assets/img/redtitle.png" alt="redtitle"/>
          <div className="absolute top-14 md:top-28 left-0 right-0 font-semibold">
            <p >رو سرمایه های خود سرمایه گذاری کنید</p>
          </div>
      </div>
      <div className="">
        <img className="mx-auto" src="/assets/img/cover.png" alt=""/>
      </div>
    </div>
  )
}

export default Layout(Home)
