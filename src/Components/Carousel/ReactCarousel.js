import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
export default class ReactCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={3000} stopOnHover={false} showStatus={false} infiniteLoop={true} swipeable={true} emulateTouch={true} dynamicHeight={true}  >
                <div style={{width: '100%'}}>
                    <img src={require('../../assests/jeff-tsx.jpg')} alt=""  />
                </div>
                <div style={{width: '100%'}}>
                    <img src={require('../../assests/bmw-pic.jpg')} alt="" />
                </div>
                <div style={{width: '100%'}}>
                    <img src={require('../../assests/280z-tim.jpg')} alt="" />
                </div>
            </Carousel>
        );
    }
}