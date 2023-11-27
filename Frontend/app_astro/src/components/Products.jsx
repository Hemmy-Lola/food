import React, { useState, useEffect } from 'react'
import Image from "../Images/Hamburger.jpg"

function SpecialOffer(){
    return (
        <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Filter(){

    const [clicked, setClicked] = useState(false)

    function getUp(){
        let a = document.querySelector(".options").clientHeight
        // document.querySelector(".options").style.transform = `translateY(-${a}px)`
        // document.querySelector(".options").style.visibility = `hidden`
        console.dir(document.querySelector(".options"))
        console.log(document.querySelector(".options").animationName)
    }

    return (
        <>
            <div className="title-options"><h4>Evènements <button onClick={() => getUp()}>O</button></h4></div>
            <div className="options">
                <button>lorem</button>
                <button>lorem</button>
                <button>lorem</button>
                <button>lorem</button>
                <button>lorem</button>
            </div>
        </>
    )
}

function Filters(){
    return (
        <div className="filter">
            <Filter />
            <Filter />
            <Filter />
        </div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Product(){
    return (
    <a href="/product/">
        <div className="product">
            <img src={Image.src} alt="Produit" width="200px" height="200px"/>
            <span className="titre">Le coucher de soleil</span>
            <span>Min. 10€</span>
        </div>
    </a>
    )
}

function AllProducts(){
    return (
        <div className="AllProducts">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

function Nav(){
    return (
        <div></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

export default function Products() {
  return (
    <div>
        <header></header>
        <div className="products">
            <Filters />
            <AllProducts />
            {/* <SpecialOffer />
            <Filters />
            <AllProducts />
            <ProductsNav /> */}
        </div>
        <footer></footer>
    </div>
  )
}
