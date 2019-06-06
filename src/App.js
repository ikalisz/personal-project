import React, {Component} from 'react';
import './App.css';
import 'reset-css'
import styled from 'styled-components'
import Loading from './Components/Loading'
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Components/Header/Header'
import MenuSlide from './Components/Header/Menu/MenuSlide'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppContainer>
          <Header />
          <MenuSlide />
          {routes}
          {this.props.loading ?
          <Loading/>
          :
          null
          }
        </AppContainer>
      </HashRouter>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState.user
}

const AppContainer= styled.div`
  position: absolute;
`
export default connect(mapStateToProps)(App);
