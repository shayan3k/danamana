import React , {useState} from "react";

// components
import Layout from '../components/layouts/LayoutMain.jsx'
import CategoryRow from '../components/Categories/CategoryRow'
import Title from '../components/Typography/Title'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// icons
import { FaExchangeAlt, FaCheckCircle } from 'react-icons/fa'

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
    <div className="text-right px-10">
      <Title font={'6xl'} title="شهر هنر و نمایش"/>
      <CategoryRow text="معرفی نمایش (تئاتر و سینما و انیمیشن)" icon={<FaExchangeAlt />} data={card}/>
      <CategoryRow text="معرفی ساز وآواز" icon={<FaExchangeAlt />} data={card}/>
      <CategoryRow text="مشاوره هنری" color="purple-800" icon={<FaCheckCircle />} data={card}/>
      <CategoryRow text="ثبت درخواست" color="blue-800" icon={<FaCheckCircle />} data={card}/>
    </div>
  )
}

export default Layout(Home)