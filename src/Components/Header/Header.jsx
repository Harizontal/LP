import "./Header.scss";
import React, { useState, useEffect } from "react";
import ListLenguagePrograming from "../ListLenguagePrograming/ListLenguagePrograming";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../Main/Main";
import TheorySection from "../TheorySection/TheorySection";
import axios from "axios";

function Header() {
  const [selectedLanguageId, setSelectedLanguageId] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [theoryData, setTheoryData] = useState([]);
  const [taskData, setTaskData] = useState([]);

  const handleLanguageClick = (id, name) => {
    setSelectedLanguageId(id);
    setSelectedLanguage(name);
  };

  useEffect(() => {
    const fetchTheoryAndTasks = async () => {
      try {
        const [theoryResponse, tasksResponse] = await Promise.all([
          axios.get(`http://localhost:3001/api/theory?id_languages=${selectedLanguageId}`),
          axios.get('http://localhost:3001/api/tasks'),
        ]);

        setTheoryData(theoryResponse.data);
        setTaskData(tasksResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTheoryAndTasks();
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
          element={<ListLenguagePrograming LanguageClick={handleLanguageClick} />}
        />
        <Route path="/About" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/Theory"
          element={<TheorySection name_language={selectedLanguage} data={theoryData} tasks={taskData} />}
        />
      </Routes>
    </div>
  );
}

export default Header;