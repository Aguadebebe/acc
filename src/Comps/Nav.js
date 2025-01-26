

const Nav = ({ handleRightFlip, handleLeftFlip }) => {
    return (
        <div>
          <button onClick={handleRightFlip} style={{ marginRight: ".1em", color: "red"}}>FLip R</button>
          <button onClick={handleLeftFlip}>Flip L</button>
        </div>
       
    );
};

export default Nav;