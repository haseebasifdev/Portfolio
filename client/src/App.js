import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <About/> 
        <Switch>
          <Route to={`/`} component={Home}/>
          <Route to={`/about`}  component={About}/>
        </Switch>
    </div>
  );
}

export default App;
