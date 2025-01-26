

const Nav = ({ handleRightFlip, handleLeftFlip }) => {
    return (
        <div>
          <button onClick={handleLeftFlip} style={{ color: "green" }}>Flip L</button>
          <button onClick={handleRightFlip} style={{ marginRight: ".1em", color: "red" }}>FLip R</button>
        </div>
       
    );
};

export default Nav;