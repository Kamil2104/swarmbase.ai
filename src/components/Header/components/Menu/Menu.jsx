import PropTypes from 'prop-types';

import Option from "./components/Option.jsx";

import { scrollToComponent } from "../../../../functions/scrollToComponent.js";

import './styles/Menu.css';

const Menu = ({ isMobile, setIsMenuVisible, setMainContent, mainContent, className }) => {
  const handleScrollToComponent = async (componentId) => {
    if (mainContent === "Main") {
      if (isMobile) {
        await closeMenu();
        scrollToComponent(componentId);
      }

      await scrollToComponent(componentId);
    } else {
      setMainContent("Main");

      setTimeout(async () => {
        if (isMobile) {
          await closeMenu();
          scrollToComponent(componentId);
        }

        scrollToComponent(componentId);
      }, 1000);
    }
  };

  const closeMenu = () => {
      setIsMenuVisible(false);
  }

  return (
    <nav className={className}>
      <Option text="What we do" componentId="features" handleScrollToComponent={handleScrollToComponent} />
      <Option text="Discover our team" componentId="team" handleScrollToComponent={handleScrollToComponent} />
      <Option text="Contact us" componentId="contact" handleScrollToComponent={handleScrollToComponent} />
    </nav>
  );
};

Menu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  setIsMenuVisible: PropTypes.func.isRequired,
  className: PropTypes.string,
  setMainContent: PropTypes.func.isRequired,
  mainContent: PropTypes.string.isRequired
};

export default Menu;
