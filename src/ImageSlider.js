import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/MZM9pYjj/Cochin.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/zvsqSQ2b/Marine-Drive-Kochi-1723.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/FKTmnznQ/kochii.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;





{/* <div>
<img src="https://i.postimg.cc/6psQd8Fj/fort-kochi.jpg" style={{width: "100px",height:"100px"}} alt="" />
</div>
<div>
<img src="https://i.postimg.cc/zvsqSQ2b/Marine-Drive-Kochi-1723.jpg" style={{width: "100px",height:"100px"}} alt="" />
</div>
<div>
<img src="https://i.postimg.cc/FKTmnznQ/kochii.jpg" style={{width: "100px",height:"100px"}} alt="" />
</div> */}