import React from 'react'

function Title(props) {
    return (
        <h1 style={{fontFamily: 'BDimona', display: 'inline-block', fontSize: "4.5rem" , fontWeight: '900'}} >
            {props.title}
        </h1>
    )
}

export default Title
