import React, {useEffect} from 'react'
import Home from './sections/Home'
import Projeto from './sections/Projeto'
import Equipe from './sections/Equipe'
import Noticias from './sections/Noticias'
import ProducaoIntelectual from './sections/ProducaoIntelectual'
import Parceiros from './sections/Parceiros'
import Contato from './sections/Contato'
import Rodape from './sections/Rodape'
import { Link, useHistory } from 'react-router-dom' //useHistory é pra redirecionar para uma página

//logo
import SISTOPlogo from '../../assets/logo.png'

// useHistory().push('/') redireciona para a página inicial

// const users = async () => {
//     const data = await api.get('/users')
//     return console.log(data)
// }

const Portal = () => {

    useEffect(()=>{

    }, [])

    // users()
    return(
        <>
            <Home />
            <Projeto />
            <Equipe />
            <ProducaoIntelectual />
            <Noticias />
            <Parceiros />
            <Contato />
            <Rodape />
        </>
    )
}

export default Portal