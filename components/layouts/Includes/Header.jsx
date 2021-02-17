import React from 'react'

// Ant Desing
import { PageHeader } from 'antd';

// React icons
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header(props) {
  return (
    <div
        className="
          flex
          items-center
          justify-between
          p-4
          shadow-md	
          site-page-header
          fs-x5
          rounded-b-3xl
        ">
        <div>
          <img className="nav-icons " src="/assets/icon/search.png" alt="search icon"/>
        </div>
        <div>
          <div >{props.title || 'دانامانا'}</div>
        </div>
        <div className="flex items-center">
          <img className="nav-icons" src="/assets/icon/hamburger.png" alt="hamburger menu"/>
        </div>
    </div>
  )
}
