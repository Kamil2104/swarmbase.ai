import { scrollToComponent } from '../../../../../../../functions/scrollToComponent';

import './styles/Button.css';

const Button = () => {
    return (
        <>
            <button onClick={() => scrollToComponent('waitlist')}> <span> Join the waitlist </span> </button>
        </>
    )
}

export default Button