import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './Carousel.module.css'

function DemoCarousel() {
        return (
            <Carousel autoPlay={true} showThumbs={false} className={style.container} showArrows={false}>
                <div>
                    <img src="/images.png"/>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                </div>
            </Carousel>
        );
    }

export default DemoCarousel;



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>