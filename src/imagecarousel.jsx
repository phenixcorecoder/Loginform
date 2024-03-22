import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const images = [
    'https://th.bing.com/th/id/OIP.JA4dLtNRo7CYUf3fp2ec2AHaE8?rs=1&pid=ImgDetMain',
    'https://www.quotemaster.org/images/f3/f3e260bc13730b420afbb506c1d6f850.jpg',
    'https://th.bing.com/th/id/OIP.7hwHXIOX0GHKW9woljbVQQHaEK?w=1540&h=866&rs=1&pid=ImgDetMain',
    
  ];
  const imageStyle = {
    width: '100%', 
    height: '560px',
    objectFit: 'cover',
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
