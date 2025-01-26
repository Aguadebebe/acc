 
import Carousel from "./Carousel";
 

const App = () => {
console.log(window.innerHeight);
const slideData = [
  { id: 0, title: "Fugi", image: "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { id: 1, title: "Girl in Norway", image: "https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { id: 2, title: "sld2", image: "https://images.pexels.com/photos/27245741/pexels-photo-27245741/free-photo-of-lava-flowing-from-crater-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { id: 3, title: "sld3", image: "https://images.pexels.com/photos/2412716/pexels-photo-2412716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { id: 4, title: "sld4", image: "https://images.pexels.com/photos/12273273/pexels-photo-12273273.jpeg?cs=srgb&dl=pexels-felipe-perez-239932751-12273273.jpg&fm=jpg&_gl=1*1v97zqc*_ga*MzY0MzU2ODYwLjE3MzQwOTc5ODQ.*_ga_8JE65Q40S6*MTczNzgxMDMzMS4xNi4xLjE3Mzc4MTA3NTkuMC4wLjA."},
  { id: 5, title: "sld5", image: "https://images.pexels.com/photos/28366252/pexels-photo-28366252/free-photo-of-scenic-black-sand-beach-in-hawaii-volcanoes-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { id: 6, title: "sld6", image: "https://images.pexels.com/photos/163992/pexels-photo-163992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { id: 7, title: "sld7", image: "https://images.pexels.com/photos/2609952/pexels-photo-2609952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];


  return (
    <div>
      <Carousel  slideData={slideData} />
    </div>
  );
};

export default App;
