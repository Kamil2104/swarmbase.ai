import Header from './components/Header'
import Text from './components/Text'
import Button from './components/Button'

import './styles/ContentBlock.css';

const ContentBlock = () => {
  return (
    <section className='contentBlock'>
        <Header />
        <Text />
        <Button />
    </section>
  )
}

export default ContentBlock