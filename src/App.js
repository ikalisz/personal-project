import React, {Component} from 'react';
import './App.css';
import 'reset-css'
import styled from 'styled-components'
import Loading from './Components/Loading'
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppContainer>
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
  return reduxState.loading
}

const AppContainer= styled.div`
  position: absolute;
`
export default connect(mapStateToProps)(App);
