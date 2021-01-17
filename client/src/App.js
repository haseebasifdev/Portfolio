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
import Loadable from 'react-loadable';
import { useDispatch, useSelector } from 'react-redux';
import { initialData, isLoggedIn } from './action/auth.action';
// const Home = lazy(() => import("./components/Home"))
// const Login = lazy(() => import("./components/Login"))
// const Admin = lazy(() => import("./components/Admin"))
// const AdminSkills = lazy(() => import("./components/Admin/Skills"))
// const Projects = lazy(() => import("./components/Admin/Projects"))
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home"*/"./components/Home"),
  loading: "loading..."
})
const Login = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Login"*/"./components/Login"),
    loading: "Loading..."
  })
const Admin = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Admin"*/"./components/Admin"),
    loading: "Loading..."
  })
const AdminSkills = Loadable(
  {
    loader: () => import(/* webpackChunkName: "AdminSkills"*/"./components/Admin/Skills"),
    loading: "Loading..."
  })
const Projects = Loadable(
  {
    loader: () => import(/* webpackChunkName: "AdminProject"*/"./components/Admin/Projects"),
    loading: "Loading..."
  })

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
        <Route exact path={`/`} component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoutes exact path="/admin" component={Admin} />
        <PrivateRoutes path="/admin/skills" component={AdminSkills} />
        <PrivateRoutes path="/admin/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
