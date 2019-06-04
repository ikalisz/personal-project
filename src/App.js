import React, {Component} from 'react';
import './App.css';
import 'reset-css'
import styled from 'styled-components'
import Loading from './Components/Loading'

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
      <AppContainer>
        <ButtonHolder>
          <TextHolder>
            <h1>Hello World</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </TextHolder>
          <ButtonTest onClick={this.handleChangeLoading}>Load!</ButtonTest>
        </ButtonHolder>
        {this.state.loading ?
        <Loading/>
        :
        null
        }
      </AppContainer>
    );
  }
}

const AppContainer= styled.div`
  position: absolute;
`
const ButtonHolder = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column
  justify-content: center;
  align-items: center;
`
const TextHolder = styled.section`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonTest = styled.button`
`

export default App;
