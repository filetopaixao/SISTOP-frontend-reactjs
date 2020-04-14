import React from 'react'
import {Container} from '../../styles'
import { Link } from 'react-router-dom' //useHistory é pra redirecionar para uma página

//logo
import SISTOPlogo from '../../assets/logo.png'

const Content = () => {
    return(
        <div style={{display:'flex', height: '490px', justifyContent: 'center', alignItems: 'center' }}>
            <Container className='row'>
                <div className="col-md-4">
                    <img src={SISTOPlogo} width={200} alt="SISTOP logo"/>
                </div>
                <div className="col-md-8" style={{ width: '400px'}}>
                    <h1>Atlas Toponímico do Tocantins</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <Link className="btn btn-primary  button" style={{}}>
                        Acessar
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Content