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
        <div>
          <Header />
          <div>
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
