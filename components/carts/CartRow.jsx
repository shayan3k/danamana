import React from 'react'

// ant
import { Col } from 'antd'

export default function CartRow() {
  return (
    <Col 
      sm={24}
      md={12}
      lg={6}
      className="my-4 shadow-md"
    > 
      <div className=" flex justify-between text-right p-3">
        <img className="image-card" src="/assets/img/default.jpg" alt="default.jpg"/>
        <div className="pl-3">
          <h3 className="text-3xl pb-3">متن پیشنهادی</h3>
          <p>متن پیشنهادیمتن پیشنهادیمتن پیشنهادی</p>
        </div>
      </div>
    </Col>
  )
}
