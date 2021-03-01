import React , {useState} from "react";

// components
import Layout from '../components/layouts/LayoutMain.jsx'
import DetailsCard from '../components/Carts/DetailsCart'
import Moshavere from '../components/Form/Moshavere'
import CategorySlider from '../components/Categories/CategorySlider'
import CategoryRow from '../components/Categories/CategoryRow'
import CategoryCol from '../components/Categories/CategoryCol'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// antd
import {Col, Row} from 'antd'

// icons
import { FaExchangeAlt, FaCheckCircle } from 'react-icons/fa'

function Home() {
  const [categoryLink , setCategoryLink] = useState([
    {src: "/assets/img/book.png" , text:"شهر کتاب", color: '#ff577f'},
    {src: "/assets/img/mario.png" , text:"شهر بازی", color: '#ff884b'},
    {src: "/assets/img/toys.png" , text:"شهر اسباب بازی", color: '#c24914'},
    {src: "/assets/img/store.png" , text:"فروشگاه", color: '#fdb827'},
    {src: "/assets/img/docter_flint.png" , text:"مشاوران", color: '#ffabe1'},
    {src: "/assets/img/console.png" , text:"بازی کامپیتوری", color: '#944e6c'},
    {src: "/assets/img/kidspeech.png" , text:"سخنان", color: '#c70039'},
    {src: "/assets/img/kindergarden.png" , text:"مهدکودک", color: '#16c79a'},
    {src: "/assets/img/basketball6.png" , text:"ورزشی", color: '#d89216'},
  ])

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

  const [detailsCard, setDetailsCard] = useState([
    {
      title: 'جزئیات ',
      desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی',
      gallery:['/assets/img/default.jpg', '/assets/img/docter_flint.png']},
  ])

  return (
    <>
      <CategoryCol data={card}/>
    </>
  )
}

export default Layout(Home)