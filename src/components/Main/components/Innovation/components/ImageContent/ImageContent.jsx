import Image from './components/Image';

import ComputerHeadIcon from './images/ComputerHeadIcon.png';
import TechIcon from './images/TechIcon.png';
import Robot1 from './images/Robot1.jpg'
import Robot2 from './images/Robot2.png'

import './styles/ImageContent.css';

const ImageContent = () => {
  return (
    <>
      <Image iconSrc={ComputerHeadIcon} iconAlt="Head with computer links icon" iconClassname="firstIcon" imageSrc={Robot1} imageAlt="Photo of robot" imageClassname="robot" row="firstRow"/>
      <Image iconSrc={TechIcon} iconAlt="Tech icon" iconClassname="secondIcon" imageSrc={Robot2} imageAlt="Photo of robots in suits" imageClassname="robotsInSuits" row="lastRow"/>
    </>
  )
}

export default ImageContent