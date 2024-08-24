import Heading from './components/Heading'
import Subheading from './components/Subheading'
import Divider from './components/Divider'
import Text from './components/Text'

import './styles/TextContent.css';

const TextContent = () => {
  return (
    <section className="textContent">
      <Heading />
      <Subheading />
      <Divider />
      <Text />
    </section>
  )
}

export default TextContent