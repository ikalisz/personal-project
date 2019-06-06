import React, {Component} from 'react';
import './App.css';
import 'reset-css'
import styled from 'styled-components'
import Loading from './Components/Loading'
import routes from './routes'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
    }
  }

  handleChangeLoading = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }

  render() {
    return (
      <HashRouter>
        <AppContainer>
          {routes}
          {this.state.loading ?
          <Loading/>
          :
          null
          }
        </AppContainer>
      </HashRouter>
    );
  }
}

const AppContainer= styled.div`
  position: absolute;
`
export default App;
