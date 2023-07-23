import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/Banner1.jpg'
import banner2 from '../../../assets/Banner2.jpg'
import banner3 from '../../../assets/Banner3.jpg'

const Banner = () => {
    return (
        <Carousel autoPlay={true}>
                <div>
                    <img src={banner1} />
                    <p className="legend">You Can Choose Your Best college</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Take Your smart Decision</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Education For All </p>
                </div>
            </Carousel>
    );
};

export default Banner;