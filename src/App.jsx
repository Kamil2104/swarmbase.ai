import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Verified from './components/Verified/Verified';

const App = () => {
  return (
    <Router>
      <section className="app">
        <Toaster position="bottom-right" />
        {location.pathname !== '/verified' && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/verified" element={<Verified />} />
        </Routes>
      </section>
    </Router>
  );
};

export default App;