import React from 'react'
import {Section} from '../../../styles'
import SliderNews from '../../../components/Noticias/SliderNews'
import Photo from '../../../assets/post.jpg'

const Noticias = () => {
      var news = [
        {
          date: '14/04/2020',
          photo: Photo,
          author: 'Fulano de Tal',
          title: 'Estado apoia o desenvolvimento de pesquisas cientificas para',
          subtitle: 'Apresentação do projeto Desenvolvimento de uma ferramenta de análise geoespacial'
        },
        {
          date: '14/04/2020',
          photo: Photo,
          author: 'Fulano de Tal',
          title: 'Estado apoia o desenvolvimento de pesquisas cientificas para',
          subtitle: 'Apresentação do projeto Desenvolvimento de uma ferramenta de análise geoespacial'
        },
        {
          date: '14/04/2020',
          photo: Photo,
          author: 'Fulano de Tal',
          title: 'Estado apoia o desenvolvimento de pesquisas cientificas para',
          subtitle: 'Apresentação do projeto Desenvolvimento de uma ferramenta de análise geoespacial'
        },
        {
          date: '14/04/2020',
          photo: Photo,
          author: 'Fulano de Tal',
          title: 'Estado apoia o desenvolvimento de pesquisas cientificas para',
          subtitle: 'Apresentação do projeto Desenvolvimento de uma ferramenta de análise geoespacial'
        }
    ]

    return(
        <div style={{ backgroundColor:'#f8f9fa'}}>
            <Section className="container" id="equipe">
                <h2>Notícias</h2>

                <SliderNews news={news} />
            </Section>
        </div>
    )
}

export default Noticias