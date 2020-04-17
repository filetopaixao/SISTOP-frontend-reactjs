import React from 'react'
import {Section} from '../../../styles'
import SliderPartner from '../../../components/Parceiros/SliderPartner'
import Photo from '../../../assets/parceiro.jpg'

const Noticias = () => {
      var partners = [
        {
          photo: Photo,
          link: 'https://pesquisasaude.saude.gov.br/',
          name: 'Programa de Pesquisa para o SUS'
        },
        {
          photo: Photo,
          link: 'https://pesquisasaude.saude.gov.br/',
          name: 'Programa de Pesquisa para o SUS'
        },
        {
          photo: Photo,
          link: 'https://pesquisasaude.saude.gov.br/',
          name: 'Programa de Pesquisa para o SUS'
        },
        {
          photo: Photo,
          link: 'https://pesquisasaude.saude.gov.br/',
          name: 'Programa de Pesquisa para o SUS'
        },
    ]

    return(
        <div style={{ backgroundColor:'#fff'}}>
            <Section className="container" id="parceiros">
                <h2>Parceiros</h2>

                <SliderPartner partners={partners} />
            </Section>
        </div>
    )
}

export default Noticias