import mountDoom from "../../assets/mountDoom.png";

const NoReview = () => {
  return (
    <div className="errorBox">
      <h1 className="errorMessage">
        This review doesn't exist yet!<br></br>
        <img className="errorImg" src={mountDoom} alt="logo"></img>
        <br></br> Why not forge one in the fires of mount doom?
      </h1>
    </div>
  );
};

export default NoReview;
