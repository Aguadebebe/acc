

const Nav = ({ handleRightFlip, handleLeftFlip }) => {
    return (
        <div>
          <button onClick={handleLeftFlip} className="left">Flip L</button>
          <button onClick={handleRightFlip} className="right">FLip R</button>
        </div>
       
    );
};

export default Nav;