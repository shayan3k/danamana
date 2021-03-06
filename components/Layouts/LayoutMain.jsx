import React from 'react'

// Header
import Header from './Includes/Header'
import Footer from './Includes/Footer'

const BaseComponenet = (Slot) => {
  class LayoutMain extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div className="h-screen overflow-hidden">
          <Header />
          <div className="relative h-full overflow-y-scroll">
            <Slot />
          </div>
          <Footer />
        </div>
      )
    }
  }
  return LayoutMain
}

export default BaseComponenet
