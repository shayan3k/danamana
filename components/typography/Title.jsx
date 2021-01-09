import React from 'react'

function Title(props) {

    const style = {
        background: '-webkit-linear-gradient(190deg,#27ae60, #e74c3c)',
        '-webkit-background-clip': 'text',
       ' -webkit-text-fill-color': 'transparent',
        fontFamily: 'BDimona',
        display: 'inline-block',
        fontSize: "4.5rem" ,
        fontWeight: '900'
    }

    return (
        <h1 style={style} >
            {props.title}
        </h1>
    )
}

export default Title
