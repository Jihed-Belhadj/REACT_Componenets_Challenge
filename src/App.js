import Headerr from './components/header';
import Footerr from './components/footer';
import Contact from './components/contact';
import Projets from './components/projects';
import About from './components/about';
import Headd from './components/head';
import './App.css';
import Head from './components/head';

function App() {
  return (
    <div className="App">
      <Headd></Headd>
      <Headerr></Headerr>
      <About></About>
      <Projets></Projets>
      <Contact></Contact>
      <Footerr></Footerr>
      
    </div>
  );
}

export default App;
