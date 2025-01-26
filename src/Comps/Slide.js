 

const Slide = ({ slideData }) => {
    return (
        <div style={{ 
          display: "flex",
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", position: "relative" }}>
           {slideData.title}
          <img 
          src={slideData.image} 
          alt={"slideImages"} 
          style={{ 
            maxWidth: "100vw", 
            maxHeight:  window.innerHeight === 60 ? "50vh" : "60vh", 
            objectFit: "contain"}}
          />
        </div>
         
    );
};

export default Slide;