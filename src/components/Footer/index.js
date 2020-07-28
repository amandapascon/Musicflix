import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to='/'>
        <img className="Logo" src={Logo} alt="Logo da MusicFlix"/>
      </Link>
    </FooterBase>
  );
}

export default Footer;
