import CategoryCard from "../../components/cards/CategoryCard";
import {Col , Row} from 'antd'

export default function CategoriesCard({ categories }) {
    return (
        <Row justify="center" gutter={[0, 0]}>
        {
            categories.map((data) => {
                return <Col span={20}><CategoryCard src={data.src} title={data.title} /></Col>
            })
        }
        </Row>
    )
}
