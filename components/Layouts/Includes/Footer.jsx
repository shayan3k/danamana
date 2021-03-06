import React from 'react'

// Next
import Link from 'next/link'
import { useRouter } from "next/router";

function Footer(props) {
  const router = useRouter()
  return (
      <div className="
        border-top-blue
        rounded-t-3xl
        bg-white
        absolute
        -bottom-0
        dir-r
        flex
        items-center
        justify-between
        w-full
        py-4
        px-8
        shadow-t-s
        fs-x5
      ">
        <Link href="/">
          <div className="navigation-hover">
              <img 
                src="/assets/icon/home.png"
                className={`
                  ${ router.pathname == "/" ? 'is-selected' : ""}
                  nav-icons
                `} 
              />
          </div>
        </Link>
        <Link href="/categories">
          <div className="navigation-hover">
            <img 
              src="/assets/icon/phone.png" 
              className={`
                ${ router.pathname == "/categories" ? 'is-selected' : ""} 
                nav-icons
              `} 
            />
          </div>
        </Link>
        <Link href="/moshavere">
          <div className="navigation-hover">
            <img 
              src="/assets/icon/plus.png" 
              className={`
                ${ router.pathname == "/moshavere" ? 'selected-nav-icon-plus' : ""} 
                nav-icon-plus
              `} 
            />
          </div>
        </Link>
        <Link href="/birthday-city">
          <div className="navigation-hover">
            <img 
              src="/assets/icon/social.png"
              className={`
                ${ router.pathname == "/birthday-city" ? 'is-selected' : ""} 
                nav-icons
              `} 
            />
          </div>
        </Link>
        <Link href="/artcity">
          <div className="navigation-hover hover">
            <img 
              src="/assets/icon/profile.png" 
              className={`
                ${ router.pathname == "/artcity" ? 'is-selected' : ""}
                nav-icons
              `}
            />
          </div>
        </Link>
      </div>
  )
}

export default Footer
