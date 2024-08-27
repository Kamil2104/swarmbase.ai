import Option from "./components/Option.jsx"

import './styles/Menu.css'

const Menu = () => {
  return (
    <nav>
        <Option text="What we do" />
        <Option text="Discover our team" />
        <Option text="Contact us" />
    </nav>
  )
}

export default Menu