import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom"
import HomeScreen from './Screens/HomeScreen'
import ProjectsScreen from './Screens/ProjectsScreen'
import AdminScreen from './Screens/AdminScreen'
import LoginScreen from './Screens/LoginScreen'
import Header from './components/Header'
import { BrowserRouter, Route } from "react-router-dom";
import { initialState, reducer } from "./reducer/reducer";
import Footer from "./components/Footer";
import DBScreen from "./Screens/DBScreen";
import RandomScreen from "./Screens/RandomScreen";
import CompletedProjectsScreen from "./Screens/CompletedProjectsScreen";
import RenovationProjectsScreen from "./Screens/RenovationProjects.Screen";
import UpcomingProjectsScreen from "./Screens/UpcomingProjectsScreen";


export const UserContext = createContext();

function Routing() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user) {
      dispatch({ type: "USER", payload: user })
    }
  }, [dispatch, history])

  return (
    <div className='py-4 px-5'>
      <Route path='/admin' component={AdminScreen} exact/>
      <Route path='/login' component={LoginScreen} exact />
      <Route path='/completedprojects' component={CompletedProjectsScreen} exact/>
      <Route path='/renovationprojects' component={RenovationProjectsScreen} exact/>
      <Route path='/upcomingprojects' component={UpcomingProjectsScreen} exact/>
      <Route path='/projects' component={ProjectsScreen} />
      <Route path='/random' component={RandomScreen} />
      <Route path='/db' component={DBScreen} />
      <Route path='/' component={HomeScreen} exact/>
  </div>
  )
}


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
