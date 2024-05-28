import "./TheorySection.scss";
import React, { useState, useEffect, useRef} from "react";

function TheorySection({ data, tasks, name_language }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState(tasks);
  const [Data, setData] = useState(data);
  const containerRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0 | tasks && tasks.length > 0) {
      setData(data);
      setTaskData(tasks)
      setLoading(false);
    }
    if (Data && Data.length > 0) {
      setLoading(false);
    }
  }, [data, Data, tasks]);

  useEffect(() => {
    const storedData = localStorage.getItem("theoryData");
    const storedIndex = localStorage.getItem("currentIndex");
    const storedTaskData = localStorage.getItem("taskData");

    if (storedData !== null && storedTaskData !== null) {
      const parsedData = JSON.parse(storedData);
      const parsedTaskData = JSON.parse(storedTaskData);
      if (parsedData && parsedData.length > 0) {
        setData(parsedData);
        setTaskData(parsedTaskData);
      }
    }

    if (storedIndex !== null) {
      setCurrentIndex(parseInt(storedIndex) || 0);
    }
  }, []);

  const handleListClick = (index) => {
    setCurrentIndex(index);
    scrollToTop();
  };

  const handleNextStep = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < Data.length ? nextIndex : 0;
    });
    scrollToTop();
  };

  const handlePreviousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    scrollToTop();
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  if (loading) {
    return <div className="loading">Загрузка данных...</div>;
  }

  if (!Data || Data.length === 0) {
    return <div className="nothing">Нет данных для отображения</div>;
  }

  return (
    <div className="theory_section" ref={containerRef}>
      <div className="row">
        <div className="theory_list col-md-2">
          <div className="content_lsit">
            <h1>{name_language}</h1>
            <ol>
              {Data.map((item, index) => (
                <div className="items_block">
                  <li
                    key={item.id_theorysections}
                    className={index === currentIndex ? "active" : ""}
                    onClick={() => handleListClick(index)}
                  >
                    {item.name}
                  </li>
                </div>
              ))}
            </ol>
          </div>
        </div>
        <div className="block_theory col-md-10">
          {Data[currentIndex] && (
            <>
              <div key={Data[currentIndex].id_theorysections}>
                <h1 className="title_theory">
                  {Data[currentIndex].name}
                </h1>
                <p
                  className="text_theory"
                  dangerouslySetInnerHTML={{
                    __html: Data[currentIndex].description,
                  }}
                />
                {taskData[currentIndex] && (
                  <div className="task_description">
                    <h3>Задача:</h3>
                    <p>{taskData[currentIndex].question}</p>
                    <div className="list_answers">
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                    </div>
                  </div>
                )}
                <button className="btn answer">Ответить</button>
              </div>
              <div className="navigate">
                <button
                  className="btn previous"
                  onClick={handlePreviousStep}
                  disabled={currentIndex === 0}
                >
                  Предыдущий шаг
                </button>
                <button
                  className="btn next"
                  onClick={handleNextStep}
                  disabled={currentIndex === Data.length - 1}
                >
                  Следующий шаг
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TheorySection;
