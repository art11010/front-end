import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slide(props) {
	return (
		<div>
			 <Carousel>
					<div>
						<img src="./src/image/img_shop_fashion.jpeg" />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src="./src/image/img_shop_digital.jpeg" />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src="./src/image/img_shop_grocery.jpeg" />
						<p className="legend">Legend 1</p>
					</div>
			</Carousel>
		</div>
	);
}

export default Slide;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// class DemoCarousel extends Slide {
//     render() {
//         return (
//             <Carousel>
//                 <div>
// 									<img src="image/img_shop_fashion.jpeg" />
// 									<p className="legend">Legend 1</p>
//                 </div>
//                 <div>
// 									<img src="image/img_shop_digital.jpeg" />
// 									<p className="legend">Legend 1</p>
//                 </div>
//                 <div>
// 									<img src="image/img_shop_grocery.jpeg" />
// 									<p className="legend">Legend 1</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));