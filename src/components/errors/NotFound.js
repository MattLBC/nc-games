import memory from "../../assets/gandalf.png";

const NotFound = () => {
  return (
    <div className="errorBox">
      <h1 className="errorMessage">404: I have no memory of this place</h1>
      <img className="errorImg" src={memory} alt="logo"></img>
    </div>
  );
};

export default NotFound;
