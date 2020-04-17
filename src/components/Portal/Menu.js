import React from 'react'
import {MenuContainer} from '../../styles'
import { Link, animateScroll as scroll } from 'react-scroll'

const Menu = () => {
    return(
        <MenuContainer>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">SISTOP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="projeto">Projeto</Link>
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="equipe">Equipe</Link>
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="producao-intelectual">Produção Intelectual</Link>
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="parceiros">Parceiros</Link>
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="noticias">Notícias</Link>
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="contato">Contato</Link>
                        <Link className="nav-item nav-link" smooth={true} duration= {500} to="#">Painel</Link>
                    </div>
                </div>
            </nav>
        </MenuContainer>
    )
}

export default Menu