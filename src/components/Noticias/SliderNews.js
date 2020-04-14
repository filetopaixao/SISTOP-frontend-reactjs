import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import {PostPhoto, PostPhotoOverlay, PostCard} from '../../styles'


const SliderTeam = (props) => {
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
                props.news.map(post => (
                <div>
                    <PostCard className='item'>
                        <PostPhoto className="photo" photo={post.photo} />
                        <PostPhotoOverlay className='photo-overlay'>
                          <p>{post.date} - {post.author}</p>
                        </PostPhotoOverlay>
                        <h5>{post.title}</h5>
                        <p>{post.subtitle}</p>
                        <Link className="btn btn-primary button" style={{}}>
                        Ler mais
                    </Link>
                    </PostCard>
                </div>
                )
                )
            }
            
        </Slider>
      )
    }

    export default SliderTeam