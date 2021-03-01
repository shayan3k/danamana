import {Row , Col} from 'antd'

import Link from 'next/link'

export default function CategoryCol({data}) {
  return (
    <Row className="grid-gap-sm justify-center">
      {
        data && 
        data.map((data) => {
          return (
            <Col
              xs={5}
              className=" text-3xl
                flex
                items-center
                justify-center
                py-8
                px-1
                shadow-xxs
                rounded-2xl
                text-center
              ">
              <Link href="/">
                <p>{data.title}</p>
              </Link>
            </Col>
          )
        })
      }
    </Row>
  )
}
