import './App.css';
import Home from './components/Home';
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoute"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Admin from './components/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { initialData, isLoggedIn } from './action/auth.action';
import { useEffect } from 'react';
import AdminSkills from './components/Admin/Skills';
import Projects from './components/Admin/Projects';
function App() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!auth.authencate) {
      dispatch(isLoggedIn())
      dispatch(initialData())
    }
  }, [])
  return (
    <div className="App">
        <Switch>
          <Route exact path={`/`} component={Home}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoutes exact path="/admin" component={Admin}/>
          <PrivateRoutes path="/admin/skills" component={AdminSkills}/>
          <PrivateRoutes path="/admin/projects" component={Projects}/>
        </Switch>
    </div>
  );
}

export default App;
