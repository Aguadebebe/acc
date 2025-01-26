import Slide from "./Slide";
import Nav from "./Nav";
import { useState } from "react";

 const Carousel = ({ slideData }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const flipSlide = (id) => {
      setCurrentIndex(id);
    };

    const totalSlides = slideData.length;

    const handleRightFlip = () => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      flipSlide(nextIndex);
    };
    
    const handleLeftFlip = () => {
      const previousIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      flipSlide(previousIndex);
    };

  return (
        <div>
          <h1>Carousel</h1>
          
            <Slide key={slideData[currentIndex].id} slideData={slideData[currentIndex]} />
            <Nav 
              flipSlide={flipSlide} 
              handleRightFlip={handleRightFlip}
              handleLeftFlip={ handleLeftFlip}
            />
        </div>
         
    );
 };

 export default Carousel;