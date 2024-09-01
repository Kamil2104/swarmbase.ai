import useIsMobile from '../../../../hooks/useIsMobile'

import TextContent from './components/TextContent/TextContent'
import ImageContent from './components/ImageContent/ImageContent'

import './styles/Innovation.css'
import './styles/InnovationResponsiveness.css'

const Innovation = () => {
  const isMobile = useIsMobile()

  return (
    <section className='innovation'>
      <section className='textContent'>
        <TextContent isMobile={isMobile} />
      </section>
      {isMobile
        ? <> </>
        : <section className='imageContent'> <ImageContent /> </section>
      }

    </section>
  )
}

export default Innovation