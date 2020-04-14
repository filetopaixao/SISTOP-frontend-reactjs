import React, {useState, useEffect} from 'react'
import {Section} from '../../../styles'
import Navtabs from '../../../components/ProducaoIntelectual/NavTabs'
import { Link } from 'react-router-dom'
import Photo from '../../../assets/photo.png'

const ProducaoIntelectual = () => {
    
    var producaoCientifica = [
        {
            title: '1Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins',
            description: 'Sobrinho Júnior, D. S.; Botelho, G.; Oliveira, A. H. M. Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins. XV Seminário de Iniciação Científica da Universidade Federal do Tocantins, v. 11, 2019.',
            link: 'http://hansen.iacuft.org.br/',
            category: 'Produção Científica',
            year: '2019'
        },
        {
            title: '2Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins',
            description: 'Sobrinho Júnior, D. S.; Botelho, G.; Oliveira, A. H. M. Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins. XV Seminário de Iniciação Científica da Universidade Federal do Tocantins, v. 11, 2019.',
            link: 'http://hansen.iacuft.org.br/',
            category: 'Produção Científica',
            year: '2019'
        }
    ]

    var producaoTecnica = [
        {
            title: 'Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins',
            description: 'Sobrinho Júnior, D. S.; Botelho, G.; Oliveira, A. H. M. Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins. XV Seminário de Iniciação Científica da Universidade Federal do Tocantins, v. 11, 2019.',
            link: 'http://hansen.iacuft.org.br/',
            category: 'Produção Técnica',
            year: '2019'
        },
        {
            title: 'Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins',
            description: 'Sobrinho Júnior, D. S.; Botelho, G.; Oliveira, A. H. M. Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins. XV Seminário de Iniciação Científica da Universidade Federal do Tocantins, v. 11, 2019.',
            link: 'http://hansen.iacuft.org.br/',
            category: 'Produção Técnica',
            year: '2019'
        },
    ]

    var softwares = [
        
        {
            title: 'Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins',
            description: 'Sobrinho Júnior, D. S.; Botelho, G.; Oliveira, A. H. M. Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins. XV Seminário de Iniciação Científica da Universidade Federal do Tocantins, v. 11, 2019.',
            link: 'http://hansen.iacuft.org.br/',
            category: 'Softwares',
            year: '2019'
        },
        {
            title: 'Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins',
            description: 'Sobrinho Júnior, D. S.; Botelho, G.; Oliveira, A. H. M. Descoberta de Conhecimento na Base de Dados do SINAN para Análise dos Casos de Hanseníase no Estado do Tocantins. XV Seminário de Iniciação Científica da Universidade Federal do Tocantins, v. 11, 2019.',
            link: 'http://hansen.iacuft.org.br/',
            category: 'Softwares',
            year: '2019'
        },
    ]
    
    return(
        <div style={{ backgroundColor:'#fff'}}>
            <Section className="container" id="producao-intelectual">
                <h2>Produção Intelectual</h2>
                <Navtabs producaoCientifica={producaoCientifica} producaoTecnica={producaoTecnica} softwares={softwares} />
            </Section>
        </div>
    )
}

export default ProducaoIntelectual