import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <About/> 
      <Projects/>
      <Skills/>
      <Tools/>
      <Contactus/>
      <Footer/>
        <Switch>
          {/* <Route to={`/`} component={Home}/>
          <Route to={`/about`}  component={About}/> */}
        </Switch>
    </div>
  );
}

export default App;
