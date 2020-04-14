import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import {TeamMemberPhoto, TeamMemberPhotoOverlay, TeamMemberCard} from '../../styles'
import { FaFacebookSquare, FaInstagram, FaSkype } from "react-icons/fa";


const SliderTeam = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
        <Slider className='team-members' {...settings} arrows={true}>
            {
                props.team.map(member => (
                <div>
                    <TeamMemberCard className='item'>
                        <TeamMemberPhoto className="photo" photo={member.photo} />
                        <TeamMemberPhotoOverlay className='photo-overlay'>
                        {member.social.facebook ? (<div><FaFacebookSquare className='social-icon' size="16" color="#BF1E2D" /></div>) : ''}
                        {member.social.instagram ? (<div><FaInstagram className='social-icon' size="16" color="#BF1E2D" /></div>) : ''}
                        {member.social.skype ? (<div><FaSkype className='social-icon' size="16" color="#BF1E2D" /></div>) : ''}
                        </TeamMemberPhotoOverlay>
                        <h5>{member.name}</h5>
                        <p>{member.formation}</p>
                        <Link className="btn btn-primary button" style={{}}>
                        Saiba mais
                    </Link>
                    </TeamMemberCard>
                </div>
                )
                )
            }
            
        </Slider>
      )
    }

    export default SliderTeam