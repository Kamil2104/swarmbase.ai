import Option from "./components/Option.jsx"

import './styles/Menu.css'

const Menu = () => {
  return (
    <nav>
        <Option text="What we do" componentId="features"/>
        <Option text="Discover our team" componentId="team"/>
        <Option text="Contact us" componentId="contact"/>
    </nav>
  )
}

export default Menu