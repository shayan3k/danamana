import React , {useState}from 'react'
import Layout from '../components/layouts/LayoutMain'
import Title from '../components/typography/Title'
import {Col , Row} from 'antd'
import BgImage from '../components/shared/BgImage'
import CategoryCard from '../components/cards/CategoryCard'

function AmusementPark(props) {

    const [categories , setCategories] = useState([
        {src: "/assets/icon/babyboss.png" , title:"روانشناسی کودک"},
        {src: "/assets/icon/babyboss.png" , title:"روانشناسی کودک"},
        {src: "/assets/icon/babyboss.png" , title:"روانشناسی کودک"},
        {src: "/assets/icon/babyboss.png" , title:"روانشناسی کودک"},
    ])
    return (
        <>
            <Row justify="center"  className="py-5 text-center vh-100">
                <Col span={24}>
                    <Title title="شهر اسباب بازی"/>
                </Col>
                <Col span={24} >
                   <Row justify="center">
                   {
                        categories.map((data) => {
                            return <Col span={16}><CategoryCard src={data.src} title={data.title} /></Col>
                        })
                    }
                   </Row>
                </Col>
                <Col span={24} >
                    <BgImage src="/assets/img/amusepark.png"/>
                </Col>
            </Row>
        </>
    )
}

export default AmusementPark
