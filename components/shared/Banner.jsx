import React from 'react'
import {Col} from 'antd'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});

function Banner({data}) {
    return (
        <Col span={24} className="position-relative m-auto">
            <img className="w-100" src="./assets/img/redtitle.png" alt="red banner"/>
            <img style={{position:'absolute', height: '120px', left: '0'}} src="./assets/img/giphy.gif" alt="red banner"/>
            <div>
            <OwlCarousel style={{position:'absolute',top: '20px', height: '120px'}} items={1} center={true} autoplay={true} loop={true} className="my-3 text-right">
                {
                    data.map((data) => {
                    return  <div className="text-white fs-2" style={{fontSize: '20px' , color: 'white' ,width: '65%', margin: '0 auto', textAlign: 'center'}}>{data.qoute}</div>
                    })
                }
            </OwlCarousel>
            </div>
        </Col>
    )
}

export default Banner
