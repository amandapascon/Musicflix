import React from 'react';

import './Menu.css'

import Logo from '../../assets/img/logo.png'

export default function Menu (){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da MusicFlix"/>
            </a>
            <a className="ButtonLink" href='/'>Novo Vídeo</a>
        </nav>
    )
}
