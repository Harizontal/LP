import "./Header.scss";
import React from "react";
import ListLenguagePrograming from "../ListLenguagePrograming/ListLenguagePrograming";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../Main/Main";
import TheorySection from "../TheorySection/TheorySection";

function Header() {
  const [selectedLanguageId, setSelectedLanguageId] = React.useState([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState([]);
  const [theoryData, setTheoryData] = React.useState([]);
  const [taskData, setTaskData] = React.useState([]);
 
  const handleLanguageClick = (id, name) => {
    setSelectedLanguageId(id);
    setSelectedLanguage(name)
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3001/api/theory?id_languages=${selectedLanguageId}`
      );
      const data = await response.json();
      setTheoryData(data);
    };
    async function fetchTasks() {
      try {
        const response = await fetch('http://localhost:3001/api/tasks');
        const data = await response.json();
        setTaskData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTasks();

    fetchData();
  }, [selectedLanguageId]);

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="headerLogo">
              <img src="/img/code.svg" width={50} height={50} alt="" />
              <h2>Radiant</h2>
            </div>
            <div className="headerCenter">
              <ul>
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Languages">Languages</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route
          path="/Languages/"
          element={
            <ListLenguagePrograming LanguageClick={handleLanguageClick} />
          }
        />
        <Route path="/About" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/Theory"
          element={<TheorySection name_language={selectedLanguage} data={theoryData} tasks ={taskData}/>}
        />
      </Routes>
    </div>
  );
}

export default Header;