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
              className=" mx-0 md:mx-5
                mb-2
                shadow-md
                gutter-row
                border
                border-black
                border-opacity-60
                rounded-2xl
              "> 
              <div className="flex justify-between text-right p-3">
                <img className="image-card" src="/assets/img/default.jpg" alt="default.jpg"/>
                <div className="pl-3 text-3xl text-yellow-400">
                  <h3 className="text-4xl pb-3 text-yellow-400">{data.title}</h3>
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
