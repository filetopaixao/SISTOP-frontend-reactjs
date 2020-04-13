import React, {useEffect} from 'react'
import Content from '../../../components/Portal/Content'
import Menu from '../../../components/Portal/Menu'
import {Header, Overlay} from '../../../styles'
//import { Link, useHistory } from 'react-router-dom' //useHistory é pra redirecionar para uma página

//logo
import SISTOPlogo from '../../../assets/logo.png'

// useHistory().push('/') redireciona para a página inicial

// const users = async () => {
//     const data = await api.get('/users')
//     return console.log(data)
// }

const Home = () => {

    // users()
    return(
        <>
            <Header>
                <Menu />
                <Content />
                <Overlay />
            </Header>
        </>
    )
}

export default Home