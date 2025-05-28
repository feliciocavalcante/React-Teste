import React from "react";

import { Link } from "react-router-dom";
import Header from "../Header";
import Carousel from "../Carousel";
import Categories from "../Categories";
import Products from "../Products";
import Collection from "../Collection";
import Footer from "../Footer";

export default function Home() {
    return (
        <div>
           <Header  />
            <Carousel />
            <Categories />
            <Products />
            <Collection />
            <Footer />
        </div>
    );
}