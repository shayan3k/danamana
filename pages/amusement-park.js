import React , {useState}from 'react'
import Layout from '../components/layouts/LayoutMain'
import Title from '../components/typography/Title'
import {Col , Row} from 'antd'
import BgImage from '../components/shared/BgImage'
import CategoriesCard from '../containers/cards/CategoriesCard'

function AmusementPark(props) {

    const [categories , setCategories] = useState([
        {src: "/assets/icon/exchange.png" , title:"تعویض اسباب بازی"},
        {src: "/assets/icon/monster-factory.png" , title:"سفارش اسباب بازی"},
        {src: "/assets/icon/docter_flint.png" , title:"دکتر اسباب بازی"},
        {src: "/assets/icon/babyboss.png" , title:"مشاوره روان شناسی کودک"},
    ])
    return (
        <Layout>
            <Row justify="center" className="py-5 text-center">
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Title title="شهر اسباب بازی"/>
                </Col>
                <Col span={24}>
                   <CategoriesCard categories={categories} />
                </Col>
            </Row>
            <BgImage src="/assets/img/amusepark.png"/>
        </Layout>
    )
}

export default AmusementPark
