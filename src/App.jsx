import {useState} from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

const App = () => {
  const [mainContent, setMainContent] = useState("Main")
  return (
    <section className='app'>
        <Header mainContent={mainContent} setMainContent={setMainContent} />
        {mainContent === "Main"
          ? <Main setMainContent={setMainContent} />
          : <PrivacyPolicy />
        }
    </section>
  )
}

export default App