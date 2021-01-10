import Layout from '../components/layouts/LayoutMain'
import React , {useState} from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});
import {Col, Row} from 'antd'
import CategoryLink from '../components/cards/CategoryLink'
import Banner from '../components/shared/Banner'

export default function Home() {
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
    <Layout>
        <div style={{minHeight: '100vh', width: '100%',background: 'url(./assets/img/cloud.png)', objectFit: 'cover', backgroundSize: 'cover'}}>
        <Row justify="center" >
            {
              categoryLink.map((data) => {
                return <CategoryLink data={data}/>
              })
            }
            <Banner data={qoutes}/>

           <Col span={24}>
              <OwlCarousel items={1} center={true} autoplay={true} loop={true} className="my-3 text-right">
                  {
                      categoryLink.map((data) => {
                        return (
                          <div className="p-5">
                            <div style={{background: 'rgba(255, 229, 185,.5)'}} className="position-relative p-4 rounded-2xl">
                                <img style={{height: '150px', width: '150px', margin: '0 auto'}} src={data.src} alt="data.src"/>
                                <p style={{bottom: '20px', left:'50%', transform:'translateX(-50%)' , margin: '0 auto'}} className="position-absolute p-3 bg-white text-center rounded-2xl w-50">{data.text}</p>
                            </div>
                          </div>
                        )
                      })
                    }
              </OwlCarousel>
           </Col>
        </Row>
     </div>
    </Layout>
  )
}
