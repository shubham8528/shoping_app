import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { GetAllProduct } from '../../API';

export const CarouselSlider =()=> {
 
  
const imgData=[{
    id:1,
    image:"https://img.freepik.com/premium-vector/summer-fashion-sale-banner-design-template_2239-1174.jpg?w=2000"

},{
    id:2,
    image:"https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fed81142f212_json_image_1609400596.webp"
},{
    id:3,
    image:"https://images.template.net/108414/fashion-sale-banner-template-85svg.jpg"
}]

  return (
        <Carousel  interval={2000}>
        {imgData.map((item)=>
            
      <Carousel.Item>
        <img
        style={{height:'400px'}}
          className="d-block w-100"
          src={item.image}
          alt="First slide"
        />
      </Carousel.Item>

        )}
        </Carousel>
      
  );
}
