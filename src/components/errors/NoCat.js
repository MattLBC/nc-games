import whiteTree from "../../assets/whiteTree.png";

const NoCat = () => {
  return (
    <div className="errorBox">
      <h1 className="errorMessage">
        This category doesn't exist!<br></br>
        <img className="errorImg" src={whiteTree} alt="logo"></img>
        <br></br> Perhapse they are waiting for their true king to return?
      </h1>
    </div>
  );
};

export default NoCat;