import React , {useState} from "react";

// components
import Layout from '../components/Layouts/LayoutMain.jsx'
import UploadForm from '../components/Form/UploadForm'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {

  return (
    <>
      <UploadForm title="تعویض لوازم ورزشی"/>
    </>
  )
}

export default Layout(Home)
