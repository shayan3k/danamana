import React from 'react'
import Link from 'next/link'
import {Col} from 'antd'
function CategoryLink({data}) {
    return (
        <Col span={6} style={{backgroundColor: `${data.color}`}} className="p-2 m-2 fs-3 rounded-2xl shadow text-black-50 text-center">
          <Link href="/">
            <div>
                <img style={{width: '60px', height: '60px'}} src={data.src} alt=""/>
                <p className="text-white ">{data.text}</p>
            </div>
          </Link>
        </Col>
    )
}

export default CategoryLink
