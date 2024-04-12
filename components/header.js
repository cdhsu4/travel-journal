import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img src="./images/globe-solid.svg" className="header--image"/>
            <i className="fa-solid fa-earth-americas"></i>
            <h1 className="header--title">My Travel Journal</h1>
        </header>
    )
}