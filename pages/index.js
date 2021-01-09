import Layout from '../components/layouts/LayoutMain'
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});

export default function Home() {
  return (
    <Layout>
      {/* Base Content */}
      <h1>به نام خدا</h1>
    </Layout>
  )
}
