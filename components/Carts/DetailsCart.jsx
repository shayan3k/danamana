import React from 'react'

// OwlCarousel
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

// components
import Button from '../Buttons/PrimaryButton'

export default function DetailsCart({data}) {
  const  responsive={
    0:{
        items:1
    },
    600:{
        items:2
    },

    900:{
        items:3.3
    },
    1000:{
        items:4.3
    },
  }
  return (
    <div
      className="my-4 text-center text-2xl">
        {
          data &&
          data.map((data, index) => {
            return (
              <div key={index}>
                <OwlCarousel
                  className="owl-theme"
                  margin={10}
                  items={1}
                  center={true}
                  autoplay={true}
                  autoplayTimeout={2000}
                  autoplayHoverPause={true}
                  loop={true}
                  responsive={responsive}
                >
                  {
                    data.gallery.map((image, index) => {
                      return <img style={{height: '220px'}} key={index} src={image} alt="image"/>
                    })
                  }
                </OwlCarousel>
                <div className="p-4 text-right text-3xl">
                  <h4 className="text-3xl font-semibold">{data.title}</h4>
                  <p>
                    {data.desc}
                  </p>
                  <div className="pt-10 font-semibold">
                    <p>پیشنهاد: با کتاب معمایی</p>
                  </div>
                  <div className="pt-10">
                    <Button bg="green-400" rounded=" rounded-full" text="اطلاعات تماس"/>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
