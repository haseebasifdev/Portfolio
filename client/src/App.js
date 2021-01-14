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
import { isLoggedIn } from './action/auth.action';
import { useEffect } from 'react';
function App() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!auth.authencate) {
      dispatch(isLoggedIn())
      // dispatch(initialData())
    }
  }, [])
  return (
    <div className="App">
        <Switch>
          <Route exact path={`/`} component={Home}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoutes exact path="/admin" component={Admin}/>
        </Switch>
    </div>
  );
}

export default App;
