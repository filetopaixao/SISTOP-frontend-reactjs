import React, {useEffect, useState} from 'react'
import api from '../../../services/api'
import {Section} from '../../../styles'
//import Description from '../../../components/Projeto/Description'
//import Info2Column from '../../../components/Projeto/Info2Column'
//import Info3Column from '../../../components/Projeto/Info3Column'
//import PreviewMap from '../../../assets/preview-map.png'
import { Link } from 'react-router-dom'

const Projeto = () => {

    const [municipios, setMunicipios] = useState(0)
    const [comInd, setComInd] = useState(0)
    const [comRem, setComRem] = useState(0)
    const [rios, setRios] = useState(0)

    useEffect(() => {
        api.get('/toponimias')
        .then(res => {
            //console.log('AEEEE', res.data['municipios'][0]['count(`idMunicipios`)'])
            setMunicipios(res.data['municipios'][0]['count(`idMunicipios`)'])
            setComInd(res.data['comInd'][0]['count(`idPovos_indigenas`)'])
            setComRem(res.data['comRem'][0]['count(`idComunidade_rem`)'])
            setRios(res.data['rios'][0]['count(`idPrincipais_rios`)'])
        })
    }, [])

    return(
        <div style={{ backgroundColor:'#fff'}}>
            <Section className="container" id="projeto">
                <h2>Projeto</h2>
                <div >
                    <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>

                    <div className="row" style={{marginBottom: '15px'}}>
                        <div className='col-md-3' style={{display: 'flex', justifyContent:'center', textAlign: 'center'}}>
                            <div style={{width: '285px', height: '150px', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{textAlign:"center"}}>
                                    <p style={{fontSize: '25px', fontWeight: 'bold'}}>{municipios}</p>
                                    <h2 style={{fontSize: '25px', margin: 0}}>Municípios</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3' style={{display: 'flex', justifyContent:'center', textAlign: 'center'}}>
                            <div style={{width: '285px', height: '150px', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{textAlign:"center"}}>
                                    <p style={{fontSize: '25px', fontWeight: 'bold'}}>{comInd}</p>
                                    <h2 style={{fontSize: '25px', margin: 0}}>Comunidades Indígenas</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3' style={{display: 'flex', justifyContent:'center', textAlign: 'center'}}>
                            <div style={{width: '285px', height: '150px', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{textAlign:"center"}}>
                                    <p style={{fontSize: '25px', fontWeight: 'bold'}}>{comRem}</p>
                                    <h2 style={{fontSize: '25px', margin: 0}}>Comunidades Remanescentes</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3' style={{display: 'flex', justifyContent:'center', textAlign: 'center'}}>
                            <div style={{width: '285px', height: '150px', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{textAlign:"center"}}>
                                    <p style={{fontSize: '25px', fontWeight: 'bold'}}>{rios}</p>
                                    <h2 style={{fontSize: '25px', margin: 0}}>Rios</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
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
                    */}
                </div>
                <div className='row' >
                    <div className='col-md-12'>
                        <Link className="btn btn-primary button" style={{}}>
                            Leia mais
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Projeto