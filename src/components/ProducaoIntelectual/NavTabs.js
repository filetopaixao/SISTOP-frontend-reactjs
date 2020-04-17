import React from 'react'

const NavTabs = (props) => {
    return(
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="producao-cientifica-tab" data-toggle="tab" href="#producao-cientifica" role="tab" aria-controls="producao-cientifica" aria-selected="true">Produção Científica</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="producao-tecnica-tab" data-toggle="tab" href="#producao-tecnica" role="tab" aria-controls="producao-tecnica" aria-selected="false">Produção Técnica</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="softwares-tab" data-toggle="tab" href="#softwares" role="tab" aria-controls="softwares" aria-selected="false">Softwares</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="producao-cientifica" role="tabpanel" aria-labelledby="producao-cientifica-tab">
                    {
                        props.producaoCientifica.map(product => {
                            return(
                                <>
                                <div style={{backgroundColor: '#9e9d9b', paddingLeft: '10px', color: '#000', marginBottom: '15px'}}>
                                    {product.year}
                                </div>
                                <div>
                                    <h7 style={{color: '#000', fontWeight: 'bold'}}>{product.title}</h7>
                                    <p style={{color:"#000", padding: '15px'}}>{product.description}</p>
                                    <p style={{paddingLeft: '15px'}}>[<a href={product.link}>ACESSE</a>]</p>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="tab-pane fade" id="producao-tecnica" role="tabpanel" aria-labelledby="producao-tecnica-tab">
                {
                        props.producaoTecnica.map(product => {
                            return(
                                <>
                                <div style={{backgroundColor: '#9e9d9b', paddingLeft: '10px', color: '#000', marginBottom: '15px'}}>
                                    {product.year}
                                </div>
                                <div>
                                    <h7 style={{color: '#000', fontWeight: 'bold'}}>{product.title}</h7>
                                    <p style={{color:"#000", padding: '15px'}}>{product.description}</p>
                                    <p style={{paddingLeft: '15px'}}>[<a href={product.link}>ACESSE</a>]</p>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="tab-pane fade" id="softwares" role="tabpanel" aria-labelledby="softwares-tab">
                {
                        props.softwares.map(product => {
                            return(
                                <>
                                <div style={{backgroundColor: '#9e9d9b', paddingLeft: '10px', color: '#000', marginBottom: '15px'}}>
                                    {product.year}
                                </div>
                                <div>
                                    <h7 style={{color: '#000', fontWeight: 'bold'}}>{product.title}</h7>
                                    <p style={{color:"#000", padding: '15px'}}>{product.description}</p>
                                    <p style={{paddingLeft: '15px'}}>[<a href={product.link}>ACESSE</a>]</p>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NavTabs