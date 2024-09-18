import React, { useState, useEffect } from 'react';


export const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images  =  ['https://i.pinimg.com/originals/e4/86/89/e48689837e97403d0f3a01e5414dfcbc.jpg', 'https://i.pinimg.com/originals/7f/3a/fb/7f3afb99032034cccc50196ca1a7c716.jpg','https://i.pinimg.com/originals/1f/79/e2/1f79e222ba225f54390dccf5a1925ef8.jpg']; // Add your image URLs here
    
    useEffect(() => {
          // eslint-disable-next-line 
      const intervalId = setInterval(() => {
    
        // Increment the image index, and loop back to the first image if reached the end
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [currentImageIndex, images.length]);
  
    
  
    return (
      <div>
     <div className='caro'>
     <img className='carousel'  src={images[currentImageIndex]} alt='' />
     </div>
        
    
  
      </div>
    )
  }


  export default About;