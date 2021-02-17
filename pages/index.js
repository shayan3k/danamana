import React , {useState} from "react";

// components
import Layout from '../components/layouts/LayoutMain.jsx'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});

// antd
import {Col, Row} from 'antd'

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

  const [qoutes, setQoutes] = useState([
    {qoute: 'و این جا چند جمله آموزنده برای ', color: 'blue'},
    {qoute: 'و این جا چند جمله آموزنده برای ', color: 'success'},
    {qoute: 'و این جا چند جمله آموزنده برای ', color: 'purple'},
    {qoute: 'و این جا چند جمله آموزنده برای ', color: 'primary'},
  ])
  return (
    <div>
      <Row justify="center" >
        
      </Row>
    </div>
  )
}

export default Layout(Home)