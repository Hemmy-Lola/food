import React from 'react'
import Image from "../Images/Hamburger.jpg"

function Banner(){
    return (
        <div className="banner">
            <img src={Image} alt="Banner" id="banner"/>
        </div>
    )
}


function Note({ note }){
    return(
           <div className="note">
            <p>{note}</p>
           </div> 
    )
}

function Notes(){
    return(
        <>
           <Note note={1} /> 
           <Note note={2} /> 
           <Note note={3} /> 
           <Note note={4} /> 
           <Note note={5} /> 
        </>
    )
}

function Details(){
    return (
        <div className="details">
            <div className="left">
                <img src={Image} alt="Banner" id="details"/>
                
                <div className="notes">
                    <Notes />
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <p>LE COUCHER DE SOLEIL</p>
                </div>
                <div className="infos">
                    <span>Thaï</span>
                    <div className="separator-info"></div>
                    <span>Paris - 15ème arr</span>
                    <div className="separator-info"></div>
                    <span>07 H 30 - 19 H 30</span>
                </div>
                    <div className="menu">
                        <span>Aile de poulet</span>
                        <div className="separator-menu"></div>
                        <span>Cuisse de poulet</span>
                        <div className="separator-menu"></div>
                        <span>Pilon de poulet</span>
                        <div className="separator-menu"></div>
                        <span>Omelette de poulet</span>
                    </div>
                    <div className="price"><span>20€ - 350€</span>

                    </div>
                    <div className="register">

                    </div>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptate natus vel, exercitationem eveniet blanditiis rem porro, placeat, beatae in necessitatibus repellat itaque. Repellat possimus quisquam quas recusandae sint nemo facere nam voluptatem eveniet, reiciendis, aliquam et ab eum ratione perferendis numquam, quibusdam rem enim. Repudiandae dolor fugiat est.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Modalities(){
    return (
        <div className="modalities"></div>
    )
}

function Comment(){
    return (
        <div className="comment">
            <div>
                <div className="picture left"></div>
                <div className="right">
                    <div className="name"></div>
                    <div className="day"></div>
                    <div className="note"></div>
                </div>
            </div>
            <p className="comment"></p>
        </div>
    )
}

function Comments(){
    return (
        <div className="comments">
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

function Images(){
    return (
        <div>
            <img src="../Images/Hamburger 2.jpg" alt="Place" className="place"/>
            <img src="../Images/Hamburger 2.jpg" alt="Place" className="place"/>
            <img src="../Images/Hamburger 2.jpg" alt="Place" className="place"/>
        </div>
    )
}

function Reinsurance(){
    return (
        <div className="reinsurance"></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

export default function DetailsOfProducts() {
  return (
    <>
        <header></header>
        <div className="detailsofproducts">
            <Banner />
            <Details />
            <Modalities />
            <Comments />
            <Images />
            <Reinsurance />
        </div>
        <footer></footer>
    </>
  )
}
