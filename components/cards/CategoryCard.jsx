import React from 'react'
import Link from 'next/link'
function CategoryCard(props) {
    return (
        <Link href="/">
            <div className="d-flex align-items-center justify-content-end bg-white shadow p-3 mt-4">
                <h2 className={`h5 px-2 text-${props.color}`} style={{fontSize: '2.2rem'}}>{props.title}</h2>
                <img className="icon-category" src={props.src} alt={props.name || "undefined"}/>
            </div>
        </Link>
    )
}

export default CategoryCard
