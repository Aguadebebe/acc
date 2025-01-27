 

const Slide = ({ slideData }) => {
    
  return (
      <div className="slide">
        {slideData.title}
        <img 
          src={slideData.image} 
          alt={"slideImages"}
          className="img-container"
          style={{maxHeight: window.innerHeight === 60 ? "50vh" : "60vh"}}
        />
      </div>
         
    );
};

export default Slide;
 