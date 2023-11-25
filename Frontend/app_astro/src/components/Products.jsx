import React from 'react'

function SpecialOffer(){
    return (
        <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Filter(){
    return (
        <div></div>
    )
}

function Filters(){
    return (
        <div></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Product(){
    return (
        <div></div>
    )
}

function AllProducts(){
    return (
        <div></div>
    )
}

function ProductsNav(){
    return (
        <div></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

export default function Products() {
  return (
    <div>
        <header></header>
        <div>
            <SpecialOffer />
            <Filters />
            <AllProducts />
            <ProductsNav />
        </div>
        <footer></footer>
    </div>
  )
}
