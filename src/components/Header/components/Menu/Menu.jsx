import Option from "./components/Option.jsx"

import './styles/Menu.css'

const Menu = () => {
  return (
    <nav>
        <Option text="What we do" className=""/>
        <Option text="Discover our team" className=""/>
        <Option text="Contact us" className=""/>
        <Option text="Join the waitlist" className="waitlistButton"/>
    </nav>
  )
}

export default Menu