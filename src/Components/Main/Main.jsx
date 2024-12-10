import ListLenguagePrograming from '../ListLenguagePrograming/ListLenguagePrograming';
import {Routes, Route,Link} from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="row align-items-center">
          <div className="content-main col-md-5">
            <h1>
              Learn Coding <br />& Programing
            </h1>
            <p>
              Hello there, if you are someone who is learning, programming and
              coding by yourself and looking for some awesome resources then you
              have come to the right place.
            </p>
            <Link to='/Languages/' className="btn">Try Now</Link>
          </div>
          <img
            src="/img/BackgroundMain.png"
            className="offset-md-1 col-md-6"
            alt=""
          />
        </div>
      </div>
      <Routes>
        <Route  path ="/Languages/" element={<ListLenguagePrograming/>}/>
      </Routes>
    </div>
  );
}

export default Main;
