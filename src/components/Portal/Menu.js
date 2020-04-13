import React from 'react'
import {MenuContainer} from '../../styles'

const Menu = () => {
    return(
        <MenuContainer>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">SISTOP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Projeto</a>
                    <a className="nav-item nav-link" href="#">Equipe</a>
                    <a className="nav-item nav-link" href="#">Produção Intelectual</a>
                    <a className="nav-item nav-link" href="#">Parceiros</a>
                    <a className="nav-item nav-link" href="#">Notícias</a>
                    <a className="nav-item nav-link" href="#">Contato</a>
                    <a className="nav-item nav-link" href="#">Painel</a>
                    </div>
                </div>
            </nav>
        </MenuContainer>
    )
}

export default Menu