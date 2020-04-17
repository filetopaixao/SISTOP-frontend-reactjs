import React from 'react'
import Slider from "react-slick";
import {PartnerCard, PartnerPhoto} from '../../styles'


const SliderPartner = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
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
                props.partners.map(partner => (
                <div>
                    <PartnerCard className='item'>
                        <div>
                          <a href={partner.link}><PartnerPhoto className="photo" photo={partner.photo} /></a>
                          <p>{partner.name}</p>
                        </div>
                    </PartnerCard>
                </div>
                )
                )
            }
            
        </Slider>
      )
    }

    export default SliderPartner