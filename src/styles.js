import styled from 'styled-components'
import background from './assets/background.jpg'

//Header
export const Header = styled.header`
    height: 100%;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    position:relative;
`

export const Overlay = styled.div`
    position: absolute; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 0;
`

export const Container = styled.div`
    z-index:1 !important;
    
    h1{
        color: #FCC72B;
    }
    p{
        color: #fff;
    }
`

export const Button = styled.a`
    color: 'black';
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
//Header

//Sections

export const Section = styled.section`
padding: 40px 0px ;
    h2{
        color: #BF1E2D;
        text-align: center;
        margin-bottom: 50px;
    }
    .rodape h5{
        color: #fff;
    }

    .rodape p{
        color: #fff;
    }

    .rodape ul{
        margin-left: -20px !important;
        list-style: square;
        color: #fff;
    }

    .rodape a{
        color: #fff;
    }

    .copyright{
        color: #fff;
        text-align: center;
        margin-top: 25px;
    }
`

export const TeamMemberCard = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 10px;
    height: 570px;
    padding: 20px;
    margin-right: 10px;
    h5{
        margin-top: -35px;
    }
    p{
        font-size: 12px;
    }
`

export const TeamMemberPhoto = styled.div`
    background-position: center;
    padding: 10px;
    background-image: ${props => `url(${props.photo})` };
    background-size: cover;
     width: 100%;
     height: 300px;
`
export const TeamMemberPhotoOverlay = styled.div`
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        margin-right: 15px;
    }
`

export const PostCard = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 10px;
    height: 535px;
    padding: 20px;
    margin-right: 10px;
    h5{
        margin-top: -35px;
    }
    p{
        font-size: 12px;
    }
`

export const PostPhoto = styled.div`
    background-position: center;
    padding: 10px;
    background-image: ${props => `url(${props.photo})` };
    background-size: cover;
     width: 100%;
     height: 300px;
`
export const PostPhotoOverlay = styled.div`
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.7);
    position: relative;
    top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        margin-right: 15px;
    }
    p{
        color: #BF1E2D;
        font-weight: bold;
        font-size: 15px;
    }
`


export const PartnerCard = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 10px;
    height: 170px;
    padding: 20px;
    margin-right: 10px;
    p{
        margin-top: 15px;
        font-size: 18px;
    }
`

export const PartnerPhoto = styled.div`
    background-position: center;
    padding: 10px;
    background-image: ${props => `url(${props.photo})` };
    background-size: cover;
    width: 130px;
    height: 90px;
    margin: auto;
`

//Sections