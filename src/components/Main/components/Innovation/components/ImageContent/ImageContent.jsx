import Image from './components/Image';

import ComputerHeadIcon from './images/ComputerHeadIcon.png';
import Robot1 from './images/Robot1.jpg'
import Robot2 from './images/Robot2.png'

import './styles/ImageContent.css';

const ImageContent = () => {
  return (
    <>
      <Image iconSrc={ComputerHeadIcon} iconAlt="Head with computer links icon" imageSrc={Robot1} imageAlt="Photo of robot" row="firstRow"/>
      <Image imageSrc={Robot2} imageAlt="Photo of robots in suits" row="lastRow"/>
    </>
  )
}

export default ImageContent