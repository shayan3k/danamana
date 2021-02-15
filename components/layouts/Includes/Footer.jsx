import React from 'react'

// Next
import Link from 'next/link'
import { useRouter } from "next/router";

function Footer(props) {
  const router = useRouter()
  return (
    <div id='footer' className="w-100">
      <div className="
        dir-r
        border-top-sm
        p-2
        d-flex
        align-items-center
        justify-content-around
        bg-white
        position-fixed
        w-100
        z-100
        bottom-0
        fs-x5
        rounded-xl-top
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
        <Link href="/orders/histories">
          <div className="navigation-hover">
            <img 
              src="/assets/icon/phone.png" 
              className={`
                ${ router.pathname == "/orders/histories" ? 'is-selected' : ""} 
                nav-icons
              `} 
            />
          </div>
        </Link>
        <Link href="/orders/histories">
          <div className="navigation-hover">
            <img 
              src="/assets/icon/plus.png" 
              className={`
                ${ router.pathname == "/orders/histories" ? 'is-selected' : ""} 
                nav-icons
                nav-icon-plus
              `} 
            />
          </div>
        </Link>
        <Link href="/orders/histories">
          <div className="navigation-hover">
            <img 
              src="/assets/icon/social.png" 
              className={`
                ${ router.pathname == "/orders/histories" ? 'is-selected' : ""} 
                nav-icons
              `} 
            />
          </div>
        </Link>
        <Link href="/">
          <div className="navigation-hover hover">
            <img 
              src="/assets/icon/profile.png" 
              className={`
                ${ router.pathname == "/profile" ? 'is-selected' : ""}
                nav-icons
              `}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer
