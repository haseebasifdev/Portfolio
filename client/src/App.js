import { useEffect, Suspense, lazy } from 'react';
import './App.css';
// import Home from './components/Home';
// import Login from './components/Login';
// import Admin from './components/Admin';
// import AdminSkills from './components/Admin/Skills';
// import Projects from './components/Admin/Projects';
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoute"
import "./scss/style.css"
import {
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { initialData, isLoggedIn } from './action/auth.action';
const Home = lazy(() => import("./components/Home"))
const Login = lazy(() => import("./components/Login"))
const Admin = lazy(() => import("./components/Admin"))
const AdminSkills = lazy(() => import("./components/Admin/Skills"))
const Projects = lazy(() => import("./components/Admin/Projects"))

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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoutes exact path="/admin" component={Admin} />
          <PrivateRoutes path="/admin/skills" component={AdminSkills} />
          <PrivateRoutes path="/admin/projects" component={Projects} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
