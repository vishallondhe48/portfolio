import './App.scss';
import Contact from './pages/Contact'
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <div className='App'>
      <LandingPage />
      <Portfolio />
      <About />
      <Contact />
      <p className='footer'>&copy; created by vishal londhe</p>
    </div>
  );
}

export default App;
