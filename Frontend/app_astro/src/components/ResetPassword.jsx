import React from 'react'
import { InputText } from "./SignUp"
import Image1 from "../Images/Image1.jpg"

function Change(){
    return (
        <div className="container-reset">
            <div className="form-reset">
                <form>
                    <div className="title">MOT DE PASSE OUBLIE</div>
                    <InputText id="email" label="Entrez une adresse mail de récupération"/>
                    <input type="submit" value="Envoyer" />
                </form>
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

export default function ResetPassword() {
  return (
    <>
        <header></header>
        <div className="resetpassword">
            <BackgroundImage />
            <Change />
        </div>
        <footer></footer>
    </>
  )
}
