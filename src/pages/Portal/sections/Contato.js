import React from  'react'
import {Section} from '../../../styles'
import FormContact from '../../../components/Contato/FormContact'
import FormMap from '../../../components/Contato/FormMap'

const Contato = () => {
    return(
        <div style={{ backgroundColor:'#f8f9fa'}}>
            <Section className="container" id="contato">
                <h2>Contato</h2>

                <div className="row">
                    <div className="col-md-6">
                        <FormMap />
                    </div>

                    <div className="col-md-6">
                        <FormContact />
                    </div>
                </div>

                
            </Section>
        </div>
    )
}

export default Contato