import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import registerCandidate from './components/registerCandidate'
import Candidate from './components/candidate'
import Login from './components/signIn'
import candidatesList from './components/candidates'
import Home from './components/home'
import Navbar from './components/navbar'
import jwt_decode from 'jwt-decode'
class App extends Component {
  UNSAFE_componentWillMount() {
    axios.interceptors.request.use(function (config) {
      const token = localStorage.token;
      config.headers.Authorization =  token;
    
      return config;
    });
    axios.defaults.headers.common['Authorization'] = localStorage.token
    
      }
 
  render() {
    const loginRoutes = (
      
          <React.Fragment>
            <Route exact path='/' component={Login} />
            </React.Fragment>
            
            )
            const userView = (
              <div id='wrapper'>
      <Navbar />
              <div id="content-wrapper" className="d-flex flex-column">
              <div id="content" >
              <div className="container-fluid mt-4" >
              <Route exact path='/' component={Home} />
              <Route exact path='/candidatesList' component={candidatesList} />
              <Route exact path='/registerCandidate' component={registerCandidate} />
              <Route exact path='/candidate/:id' component={Candidate} />
              </div>
              </div>
              </div>
      </div>
    
    )
    return (
      <Router>
        <Switch>
          {localStorage.token ? userView : loginRoutes}
          </Switch>
        </Router>
    );
  }
}

export default App;
