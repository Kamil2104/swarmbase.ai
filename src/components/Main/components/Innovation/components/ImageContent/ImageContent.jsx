import Image from './components/Image';

import Robot1 from './images/Robot1.jpg'
import Robot2 from './images/Robot2.png'

import './styles/ImageContent.css';

const ImageContent = () => {
  return (
    <>
      <Image src={Robot1} alt="Photo of robot" row="firstRow"/>
      <Image src={Robot2} alt="Photo of robots in suits" row="lastRow"/>
    </>
  )
}

export default ImageContent