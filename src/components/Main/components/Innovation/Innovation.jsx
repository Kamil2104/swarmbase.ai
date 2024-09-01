import TextContent from './components/TextContent/TextContent'
import ImageContent from './components/ImageContent/ImageContent'

import './styles/Innovation.css'
import './styles/InnovationResponsiveness.css'

const Innovation = () => {
  return (
    <section className='innovation'>
      <section className='textContent'>
        <TextContent />
      </section>
      <section className='imageContent'>
       <ImageContent />
      </section>
    </section>
  )
}

export default Innovation