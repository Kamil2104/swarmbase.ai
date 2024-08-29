import PropTypes from 'prop-types'

import Option from "./components/Option.jsx"

import { scrollToComponent } from "../../../../functions/scrollToComponent.js"

import './styles/Menu.css'

const Menu = (props) => {
  const handleScrollToComponent = (componentId) => {
    if (props.mainContent === "Main") {
      scrollToComponent(componentId)
    } else {
      props.setMainContent("Main")

      setTimeout(() => {
        scrollToComponent(componentId);
      }, 1000);
    }
  }

  return (
    <nav>
        <Option text="What we do" componentId="features" handleScrollToComponent={handleScrollToComponent}/>
        <Option text="Discover our team" componentId="team"handleScrollToComponent={handleScrollToComponent}/>
        <Option text="Contact us" componentId="contact"handleScrollToComponent={handleScrollToComponent}/>
    </nav>
  )
}

Menu.propTypes = {
  mainContent: PropTypes.string.isRequired,
  setMainContent: PropTypes.func.isRequired
}

export default Menu