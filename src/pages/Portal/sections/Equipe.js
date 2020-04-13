import React from 'react'
import {Section} from '../../../styles'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Photo from '../../../assets/photo.png'
import {TeamMemberPhoto, TeamMemberPhotoOverlay, TeamMemberCard} from '../../../styles'
import { FaFacebookSquare, FaInstagram, FaSkype } from "react-icons/fa";

const Projeto = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        //autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div style={{ backgroundColor:'#f8f9fa'}}>
            <Section className="container" id="projeto">
                <h2>Equipe</h2>

                <Slider dots={true} className='team-members' {...settings} arrows={true}>
                    <div>
                        <TeamMemberCard className='item'>
                            <TeamMemberPhoto className="photo" photo={Photo} />
                            <TeamMemberPhotoOverlay className='photo-overlay'>
                              <div>
                                <FaFacebookSquare className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaInstagram className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaSkype className='social-icon' size="16" color="#BF1E2D" />
                              </div>  
                            </TeamMemberPhotoOverlay>
                            <h5>Ary Henrique Morais de Oliveira</h5>
                            <p>Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT)
                            Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)
                            </p>
                            <Link className="btn btn-primary" style={{}}>
                              Saiba mais
                          </Link>
                        </TeamMemberCard>
                    </div>
                    <div>
                        <TeamMemberCard className='item'>
                            <TeamMemberPhoto className="photo" photo={Photo} />
                            <TeamMemberPhotoOverlay className='photo-overlay'>
                              <div>
                                <FaFacebookSquare className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaInstagram className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaSkype className='social-icon' size="16" color="#BF1E2D" />
                              </div>  
                            </TeamMemberPhotoOverlay>
                            <h5>Ary Henrique Morais de Oliveira</h5>
                            <p>Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT)
                            Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)
                            </p>
                            <Link className="btn btn-primary" style={{}}>
                              Saiba mais
                          </Link>
                        </TeamMemberCard>
                    </div>
                    <div>
                        <TeamMemberCard className='item'>
                            <TeamMemberPhoto className="photo" photo={Photo} />
                            <TeamMemberPhotoOverlay className='photo-overlay'>
                              <div>
                                <FaFacebookSquare className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaInstagram className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaSkype className='social-icon' size="16" color="#BF1E2D" />
                              </div>  
                            </TeamMemberPhotoOverlay>
                            <h5>Ary Henrique Morais de Oliveira</h5>
                            <p>Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT)
                            Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)
                            </p>
                            <Link className="btn btn-primary" style={{}}>
                              Saiba mais
                          </Link>
                        </TeamMemberCard>
                    </div>
                    <div>
                        <TeamMemberCard className='item'>
                            <TeamMemberPhoto className="photo" photo={Photo} />
                            <TeamMemberPhotoOverlay className='photo-overlay'>
                              <div>
                                <FaFacebookSquare className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaInstagram className='social-icon' size="16" color="#BF1E2D" />
                              </div>
                              <div>
                                <FaSkype className='social-icon' size="16" color="#BF1E2D" />
                              </div>  
                            </TeamMemberPhotoOverlay>
                            <h5>Ary Henrique Morais de Oliveira</h5>
                            <p>Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT)
                            Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)
                            </p>
                            <Link className="btn btn-primary" style={{}}>
                              Saiba mais
                          </Link>
                        </TeamMemberCard>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </Section>
        </div>
    )
}

export default Projeto