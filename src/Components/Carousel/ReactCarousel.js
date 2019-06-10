import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
export default class ReactCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={3000} stopOnHover={false} showStatus={false} infiniteLoop={true} swipeable={true}  >
                <div>
                    <img src={require('../../assests/jeff-tsx.jpg')} />
                </div>
                <div>
                    <img src={require('../../assests/bmw-pic.jpg')} />
                </div>
                <div>
                    <img src={require('../../assests/280z-tim.jpg')} />
                </div>
            </Carousel>
        );
    }
}