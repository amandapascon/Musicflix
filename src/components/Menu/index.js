import React from 'react';

import './Menu.css'

import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

export default function Menu (){
    return(
        <nav className="Menu">
            <Link to='/'>
                <img className="Logo" src={Logo} alt="Logo da MusicFlix"/>
            </Link>
            <Link className="ButtonLink" to='/cadastro/video'>Novo Vídeo</Link>
        </nav>
    )
}
