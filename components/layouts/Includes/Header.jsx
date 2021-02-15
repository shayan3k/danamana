import React from 'react'

// Ant Desing
import { PageHeader } from 'antd';

// React icons
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header(props) {
  return (
    <div
        className="
          align-items-center 
          d-flex 
          justify-content-between 
          site-page-header 
          shadow-sm
          fs-x5
          p-4">
        <div>
          <img className="icons" src="/assets/icon/search.png" alt="search icon"/>
        </div>
        <div>
          <div >{props.title || 'دانامانا'}</div>
        </div>
        <div className="d-flex align-items-center">
          <img className="icons" src="/assets/icon/hamburger.png" alt="hamburger menu"/>
        </div>
    </div>
  )
}
