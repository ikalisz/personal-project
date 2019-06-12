import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import Loading from './Components/Loading'
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Components/Header/Header'
import MenuSlide from './Components/Header/Menu/MenuSlide'
import Footer from './Components/Footer/Footer'
import {resetMenu} from './redux/Reducers/menuReducer'
import {setUser} from './redux/Reducers/userReducer'

class App extends Component {
  componentDidMount() {
    document.addEventListener('beforeunload', () => {
      this.props.resetMenu()
    })
    axios.get('/auth/user')
    .then(res => {
      this.props.setUser({...res.data})
    })
  }
  render() {
    return (
      <HashRouter>
        <AppContainer>
          <Header />
          <MenuSlide />
          <RouteContainer>
            {routes}
          </RouteContainer>
          {this.props.loading ?
          <Loading/>
          :
          null
          }
          <Footer />
        </AppContainer>
      </HashRouter>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState.loading
}

const AppContainer= styled.div`
  height: 100vh;
  width: 100vw;
`

const RouteContainer = styled.main`
  height: 65vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

export default connect(mapStateToProps, {resetMenu, setUser})(App);
