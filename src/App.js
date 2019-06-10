import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'
import Loading from './Components/Loading'
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Components/Header/Header'
import MenuSlide from './Components/Header/Menu/MenuSlide'
import Footer from './Components/Footer/Footer'
import {resetMenu} from './redux/Reducers/menuReducer'

class App extends Component {
  componentDidMount() {
    document.addEventListener('beforeunload', () => {
      this.props.resetMenu()
    })
  }
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
  max-height: 100vh;
  width: 100vw;
`
export default connect(mapStateToProps, {resetMenu})(App);
