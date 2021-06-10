import React from 'react'
import cake from'./images/cake.jpeg'
import icecream from './images/icecream.jpg'
import chocolate from './images/chocolate.jpg'
import {Carousel} from 'react-bootstrap'
function Home() {
    return (
        <div id='home'>
            <h3>Welcome to Fudge Co. </h3>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: 400}}
      src={cake}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: 400}}
      src={chocolate}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: 400}}
      src={icecream}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
