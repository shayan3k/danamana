import React , {useState} from "react";

// components
import Layout from '../components/layouts/LayoutMain.jsx'
import Cart from '../components/carts/CartRow'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  
  const [card, setCard] = useState([
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
    <div className="p-10 mb-20 md:mb-52">
      <Cart text="مدلینگ" data={card}/>
    </div>
  )
}

export default Layout(Home)