import React from 'react'
import { InputText } from "./SignUp.jsx"
import { OthersMethods } from "./SignUp.jsx"
import Image1 from "../../public/Image1.jpg"

function Connexion(){
    return (
        <div className="container-login">
            <div className="form-login">
                <form>
                <div className="title">CONNEXION</div>
                <InputText id="email" label="Adresse mail"/>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" label="Mot de passe"/>
                <div className="links">
                    <a href="#" id="forgotten-password">Mot de passe oublié</a>
                    <a href="/signup/" id="signup">Inscrivez-vous</a>
                </div>
                <input type="submit" value="Se connecter" />
            </form>
            <OthersMethods />
            </div>
        </div>
    )
}

function BackgroundImage(){
    return (
        <div className="background">
            <img src={Image1} alt="BackgroundImages" id="background"/>
        </div>
    )
}

export default function LogIn() {
  return (
    <>
        <header></header>
        <div className="login">
            <BackgroundImage />
            <Connexion />
        </div>
        <footer></footer>
    </>
  )
}
