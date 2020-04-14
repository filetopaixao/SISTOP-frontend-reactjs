import React from 'react'
import {Section} from '../../../styles'
import SliderTeam from '../../../components/Equipe/SliderTeam'
import Photo from '../../../assets/photo.png'

const Equipe = () => {
    

      var team = [
        {
          photo: Photo,
          social:{
            facebook: 'a',
            instagram: 'b',
          },
          name: 'Fulano de Tal',
          formation: 'Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT) Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)'
        },
        {
          photo: Photo,
          social:{
            facebook: 'a',
            instagram: 'b',
            skype: 'c'
          },
          name: 'Fulano de Tal',
          formation: 'Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT) Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)'
        },
        {
          photo: Photo,
          social:{
            instagram: 'b',
            skype: 'c'
          },
          name: 'Fulano de Tal',
          formation: 'Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT) Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)'
        },
        {
          photo: Photo,
          social:{
            facebook: 'a',
            skype: 'c'
          },
          name: 'Fulano de Tal',
          formation: 'Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT) Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)'
        },
        {
          photo: Photo,
          social:{
            facebook: 'a',
            instagram: 'b',
            skype: 'c'
          },
          name: 'Fulano de Tal',
          formation: 'Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT) Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)'
        },
        {
          photo: Photo,
          social:{
            facebook: 'a',
            instagram: 'b',
            skype: 'c'
          },
          name: 'Fulano de Tal',
          formation: 'Ciência da Computação - Universidade Federal do Tocantins (CCOMP/UFT) Programa de Pós Graduação em Propriedade intelectual e Transferência de Tecnologia para Inovação (PRFNIT/UFT)'
        }
      ]
    return(
        <div style={{ backgroundColor:'#f8f9fa'}}>
            <Section className="container" id="equipe">
                <h2>Equipe</h2>

                <SliderTeam team={team} />

            </Section>
        </div>
    )
}

export default Equipe