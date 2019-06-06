import React, {Component} from 'react'
import pics from '../../assests/pics.js'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeLoaded} from '../../redux/Reducers/imageSlides'

class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            slideIndex: 0,
            id: null,
        }
    }
    previous = async () => {
        await clearInterval(this.state.id)
        let {slideIndex} = this.state
        if (this.state.slideIndex === 0) {
            await this.setState({slideIndex: (pics.length - 1)})
            await this.displayPics()
            let id = setInterval(this.automaticSlide, 3000)
            this.setState({id})
        } else {
            let newSlide = slideIndex - 1
            await this.setState({slideIndex: newSlide})
            await this.displayPics()
            let id = setInterval(this.automaticSlide, 3000)
            this.setState({id})
        }

    }
    next = async () => {
        await clearInterval(this.state.id)
        if (this.state.slideIndex === (pics.length - 1)) {
            await this.setState({
                slideIndex: 0
            })
            await this.displayPics()
            let id = setInterval(this.automaticSlide, 3000)
            this.setState({id})
        } else {
            let newSlide = this.state.slideIndex + 1
            await this.setState({
                slideIndex: newSlide
            })
            await this.displayPics()
            let id = setInterval(this.automaticSlide, 3000)
            this.setState({id})
        }
    }
    displayPics = () => {
        let picSlides = document.querySelectorAll('.slide')
        for (let i = 0; i < pics.length; i++){
            picSlides[i].style.display = 'none'
        }
        picSlides[this.state.slideIndex].style.display = 'flex'
    }

    automaticSlide = () => {
        let picSlides = document.querySelectorAll('.slide')
        for (let i = 0; i < pics.length; i++){
            picSlides[i].style.display = 'none'
        }
        let newSlide = this.state.slideIndex + 1
        if (newSlide > pics.length - 1) {
            newSlide = 0
        }
        this.setState({
            slideIndex: newSlide
        })
        picSlides[this.state.slideIndex].style.display = 'flex'
    }
    componentDidMount() {
        this.props.changeLoaded()
        if (!this.props.loaded) {
            let id = setInterval(this.automaticSlide, 3000)
            this.setState({
                id
            })

        }
    }
    componentWillUnmount() {
        clearInterval(this.state.id)
    }
    render() {
        let picDisplay = pics.map((pic, i) => {
            return <ImageSlide className="slide" key={i} src={pic} alt="" />
        })
        return (
            <MainContainer className="test">
                <ButtonSlide onClick={this.previous}>Prev</ButtonSlide>
                {picDisplay}
                <ButtonSlide onClick={this.next}>Next</ButtonSlide>
            </MainContainer>
        )
    }
}

const ImageSlide = styled.img`
height: 85vh;
width: 80vw;
`

const ButtonSlide = styled.button`
height: 85vh;
width: 10vw;
background: #888;
background-opacity: .7;
`
const MainContainer = styled.main`
height: 85vh;
width: 100vw;
display: none;
@media (min-width:1000px) {
    display: flex;
}
`

function mapStateToProps(reduxState) {
    return reduxState.loaded
}

export default connect(mapStateToProps, {changeLoaded})(Carousel)