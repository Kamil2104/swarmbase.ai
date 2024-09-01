import PropTypes from 'prop-types';
import Option from "./components/Option.jsx";

import { scrollToComponent } from "../../../../functions/scrollToComponent.js";

import './styles/Menu.css';

const Menu = ({ setMainContent, mainContent, className }) => {
  const handleScrollToComponent = (componentId) => {
    if (mainContent === "Main") {
      scrollToComponent(componentId);
    } else {
      setMainContent("Main");

      setTimeout(() => {
        scrollToComponent(componentId);
      }, 1000);
    }
  };

  return (
    <nav className={className}>
      <Option text="What we do" componentId="features" handleScrollToComponent={handleScrollToComponent} />
      <Option text="Discover our team" componentId="team" handleScrollToComponent={handleScrollToComponent} />
      <Option text="Contact us" componentId="contact" handleScrollToComponent={handleScrollToComponent} />
    </nav>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  setMainContent: PropTypes.func.isRequired,
  mainContent: PropTypes.string.isRequired
};

export default Menu;
