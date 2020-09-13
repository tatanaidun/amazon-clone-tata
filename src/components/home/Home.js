import React, { useState } from "react";
import Product from "../product/Product";
import "./Home.css";

const CustomCarousel = ({ images }) => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item ">
          <img
            src={images[0]}
            class="d-block w-100 home_image"
            alt="BannerImage1"
          />
        </div>
        <div class="carousel-item active">
          <img
            src={images[1]}
            class="d-block w-100 home_image"
            alt="BannerImage2"
          />
        </div>
        <div class="carousel-item">
          <img
            src={images[2]}
            class="d-block w-100 home_image"
            alt="BannerImage3"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

function Home() {
  const images = [
    "https://geekintheshell.com/wp-content/uploads/2019/09/Amazon-Prime-The-Boys.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
  ];
  return (
    <>
      <div className="home">
        <div className="home__container">
          <CustomCarousel images={images} />
          <div className="home_row">
            <Product
              id={12115}
              title="Washing Machine"
              price={15000.99}
              rating={5}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW5Y1sAzc7iqagMZ0vkegJ5jYVZt_2fjYbrUlFY8lvPrKXhRHk3e0EMOUXq4a3Y0fqt67UGFpa&usqp=CAc"
            />
            <Product
              id={12116}
              title="Streamer Chair | The most comfortable one |at best deal"
              price={1200.99}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkZuvRGbDhXOhQRuA7iNPbXkmOFF43RdPO4w&usqp=CAU"
            />
          </div>
          <div className="home_row">
            <Product
              id={12117}
              title="Dream Tv"
              price={85000.99}
              rating={4}
              image="https://i.ytimg.com/vi/-Hh2E9usg-0/maxresdefault.jpg"
            />
            <Product
              id={12118}
              title="Fossil Watch"
              price={7002.99}
              rating={4}
              image="https://fossil.scene7.com/is/image/FossilPartners/FS5652_main?$sfcc_fos_large$"
            />
            <Product
              id={12119}
              title="Sofa Set"
              price={12200.99}
              rating={4}
              image="https://rukminim1.flixcart.com/image/352/352/k251k7k0/sofa-set/c/t/h/grey-cotton-mofisofas15-3-1-1-mofisofas-grey-original-imafhjdbhm7z7us8.jpeg?q=70"
            />
          </div>
          <div className="home_row">
            <Product
              id={12120}
              title="Office screen Samsung Odssey"
              price={12500.99}
              rating={5}
              image="https://image-us.samsung.com/SamsungUS/support/solutions/computing/monitors/COMP_MON_Monitor-Refresh-Rate.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
