import React from 'react'

// ant
import { Col, Row } from 'antd'

export default function CartRow({data}) {
  return (
    <Row justify="center grid-gap-sm" >
      {
        data && 
        data.map((data) => {
          return (
            <Col 
              sm={24}
              md={10}
              lg={6}
              className="my-4 shadow-md gutter-row"
            > 
              <div className=" flex justify-between text-right p-3">
                <img className="image-card" src="/assets/img/default.jpg" alt="default.jpg"/>
                <div className="pl-3">
                  <h3 className="text-2xl pb-3">{data.title}</h3>
                  <p>{data.desc}</p>
                </div>
              </div>
            </Col>
          )
        })
      }
    </Row>
  )
}
