import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CarouselItemProps {
    src: string;
    alt?: string;
    caption?: string;
  }

  const MyCarousel: React.FC = () => {
    const items: CarouselItemProps[] = [
      {
        src: 'https://picsum.photos/800/400?text=First+slide&bg=373940',
        alt: 'First slide',
        caption: 'First slide',
      },
      {
        src: 'https://picsum.photos/800/400?text=Second+slide&bg=282c34',
        alt: 'Second slide',
        caption: 'Second slide',
      },
      {
        src: 'https://picsum.photos/800/400?text=Third+slide&bg=20232a',
        alt: 'Third slide',
        caption: 'Third slide',
      },
    ];
  
    return (
      <Carousel>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default MyCarousel;
    