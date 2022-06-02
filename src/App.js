import React from 'react'
import { BrowserRouter, Route, Router} from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Home from './components/Home'
import Africa from'./components/Africa'
import Americas from'./components/Americas'
import Asia from'./components/Asia'
import Europe from'./components/Europe'
import Oceania from'./components/Oceania'
import { AccountBox } from "./components/accountBox";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="menu">
    
        <Router>
          <Route exact path="/" component={RegisterPageComponent} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/africa" component={Africa} />
          <Route exact path="/americas" component={Americas} />
          <Route exact path="/asia" component={Asia} />
          <Route exact path="/europe" component={Europe} />
          <Route exact path="/oceania" component={Oceania} />
        </Router>
      </div>

    </BrowserRouter>
    )
  }
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
` ;

function RegisterPageComponent() {
  return (
    <div>
    <AppContainer>
      <AccountBox />
    </AppContainer>
   
</div>
  ) ;
}

export default App;
