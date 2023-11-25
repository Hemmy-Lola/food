import React from 'react'
import Image1 from "../Images/Image1.jpg"

export function InputText({ id, label }){
    return (
        <>
        <label htmlFor={ id }>{ label }</label>
        <input type="text" name={id} id={ id }/>
        </>
    )
}

function Button({ id, value, svg }){
    return(
    <button id={id}>
        {value}
        <img src={svg} alt="" />
    </button>
    )
}

export function OthersMethods(){
    return(
        <div>
            <Button id="google" value="Google" svg={""}/>
            <Button id="facebook" value="Facebook" svg={""}/>
            <Button id="instagram" value="instagram" svg={""}/>
        </div>
    )
}

function Inscription(){
    return (
        <div className="container-signup">
            <div className="form-signup">
                <form>
                    <div className="title">INSCRIPTION</div>
                    <InputText id="email" label="Adresse mail"/>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" label="Mot de passe"/>
                    <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                    <input type="password" id="confirm-password" label="Confirmer le mot de passe"/>
                    <InputText id="number" label="Numéro de téléphone"/>
                    <InputText id="email" label="Adresse mail"/>
                    <div className="links">
                        <a href="/" id="login">Déjà inscrit? Connectez-vous</a>
                    </div>
                    <input type="submit" value="S'inscrire" />
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
        <div className="signup">
            <BackgroundImage />
            <Inscription />
        </div>
        <footer></footer>
    </>
  )
}
