import React from 'react'
import {Section} from '../../../styles'
import Description from '../../../components/Projeto/Description'
import Info2Column from '../../../components/Projeto/Info2Column'
import Info3Column from '../../../components/Projeto/Info3Column'
import PreviewMap from '../../../assets/preview-map.png'
import { Link } from 'react-router-dom'

const Projeto = () => {
    return(
        <div style={{ backgroundColor:'#fff'}}>
            <Section className="container" id="projeto">
                <h2>Projeto</h2>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={PreviewMap} width="400" alt="SISTOP preview"/>
                    </div>
                    <div className='col-md-7'>
                        <Description description="O projeto Desenvolvimento de uma Ferramenta de Análise Geoespacial a partir 
                        dos dados do SINAN­TO sobre os casos de Hanseníase no Tocantins através de métodos e ferramentas de 
                        Inteligência Artificial foi aprovado na chamada FAPT/TO­DECIT/SCTIE/MS­CNPq/N° 01/2017. O projeto tem em 
                        vista a aplicação em Políticas públicas e saúde" />

                        <Info2Column 
                            title1="Coordenador" content1="Ary Henrique Morais de Oliveira"
                            title2="Instituição de Vínculo" content2="Universidade Federal do Tocantins"
                        />
                        <Info2Column 
                            title1="Sigla do Projeto" content1="EFP+00014243"
                            title2="Setor de Aplicação" content2="Polítixas Públicas e Saúde"
                        />
                        <Info2Column 
                            title1="Linha Temática" content1="Planejamento, inovação e estratégias para a efetivação das políticas,
                            programas e ações de saúde"
                        />
                        <Info3Column
                            title1="Sigla do Projeto" content1="EFP+00014243"
                            title2="Setor de Aplicação" content2="Polítixas Públicas e Saúde"
                            title3="Setor de Aplicação" content3="Polítixas Públicas e Saúde"
                        />
                    </div>
                </div>
                <div className='row' style={{display:'flex', justifyContent: 'center', textAlign: 'center'}}>
                    <div className='col-md-12'>
                        <Link className="btn btn-primary" style={{}}>
                            Veja mais
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Projeto