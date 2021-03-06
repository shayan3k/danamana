import React , {useState} from "react";

// components
import Layout from '../components/Layouts/LayoutMain.jsx'
import DetailsCard from '../components/Carts/DetailsCart'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {

  const [detailsCard, setDetailsCard] = useState([
    {
      title: 'جزئیات ',
      desc: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ',
      gallery:['/assets/img/default.jpg', '/assets/img/docter_flint.png']},
  ])

  return (
    <>
      <DetailsCard data={detailsCard}/>
    </>
  )
}

export default Layout(Home)
