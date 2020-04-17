import React from  'react'
import {Section} from '../../../styles'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Rodape = () => {
    return(
        <div style={{ backgroundColor:'#000'}}>
            <Section className="container">

                <div className="row rodape">
                    <div className="col-md-4">
                        <h5>Projeto</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Link</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Projeto</a></li>
                            <li><a href="#">Equipe</a></li>
                            <li><a href="#">Produção Intelectual</a></li>
                            <li><a href="#">Parceiros</a></li>
                            <li><a href="#">Notícias</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Alguma Pergunta?</h5>
                        <div className="row">
                            <div className="col-md-1">
                                <FaMapMarkerAlt className='social-icon' size="16" color="#fff" />
                            </div>
                            <div className="col-md-11">
                                <p>Quadra 109 Norte, Avenida NS15, ALCNO-14 - Plano Diretor Norte, 77001-090, Palmas - TO, Brasil</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <FaPhone className='social-icon' size="16" color="#fff" />
                            </div>
                            <div className="col-md-11">
                                <p>(63) 3229-4514</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <FaEnvelope className='social-icon' size="16" color="#fff" />
                            </div>
                            <div className="col-md-11">
                                <p>email@uft.edu.br</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-md-12">
                        <p>Copyright ©2020 All rights reserved | Template made by Fileto Paixão</p>
                    </div>
                </div>

                
            </Section>
        </div>
    )
}

export default Rodape