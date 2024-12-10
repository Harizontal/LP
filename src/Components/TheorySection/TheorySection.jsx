import "./TheorySection.scss";
import React, { useState, useEffect, useRef } from "react";

function TheorySection({ data, tasks, name_language }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState(tasks);
  const [Data, setData] = useState(data);
  const containerRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [Correct, setCorrect] = useState(0);
  const [press, setPress] = useState(false);



  const handleAnswerChange = (answerId, correct) => {
    setSelectedAnswer(answerId);
    setCorrect(correct);
  };

  const checkAnswer = () => {
    if (Correct.data[0] === 1) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    console.log(isAnswerCorrect)
    console.log(press)
    setPress(true);
  };
  const restart = () => {
    setSelectedAnswer(null);
    setIsAnswerCorrect(false);
    setPress(false)
  }

  useEffect(() => {
    if (data && (data.length > 0) | tasks && tasks.length > 0) {
      setData(data);
      setTaskData(tasks);
      setLoading(false);
    }
    if (Data && Data.length > 0) {
      setLoading(false);
    }
  }, [data, Data, tasks]);

  useEffect(() => {
    if (Data.length > 0) {
      localStorage.setItem("theoryData", JSON.stringify(Data));
      localStorage.setItem("currentIndex", currentIndex);
      localStorage.setItem("taskData", JSON.stringify(taskData));
    }
  }, [Data, currentIndex, taskData]);

  useEffect(() => {
    const storedData = localStorage.getItem("theoryData");
    const storedIndex = localStorage.getItem("currentIndex");
    const storedTaskData = localStorage.getItem("taskData");

    setCurrentIndex(parseInt(storedIndex) || 0);

    if (storedData !== null && storedTaskData !== null) {
      const parsedData = JSON.parse(storedData);
      const parsedTaskData = JSON.parse(storedTaskData);
      if (parsedData && parsedData.length > 0) {
        setData(parsedData);
        setTaskData(parsedTaskData);
      }
    }
  }, []);

  useEffect(() => {
    const fetchAnswerData = async () => {
      const taskId =
        taskData && taskData[currentIndex] && taskData[currentIndex].id_task;
      if (taskId) {
        const response = await fetch(
          `http://localhost:3001/api/answers?id_task=${taskId}`
        );
        const data = await response.json();
        setAnswers(data);
      }
    };

    fetchAnswerData();
  }, [currentIndex, taskData]);

  const handleListClick = (index) => {
    setCurrentIndex(index);
    scrollToTop();

  };
  const handleNextStep = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < Data.length ? nextIndex : 0;
    });
    setSelectedAnswer(null);
    setIsAnswerCorrect(false);
    setPress(false);
  
    setTimeout(() => {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const handlePreviousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    scrollToTop();
    setSelectedAnswer(null);
    setIsAnswerCorrect(false);
    setPress(false)
  };


  const scrollToTop = () => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
                <div className="items_block" key={item.id_theorysections}>
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
                    <h3>Вопрос:</h3>
                    <p>{taskData[currentIndex].question}</p>
                    <div className="task_answers">
                      <h3>Варианты ответов:</h3>
                      {answers.map((answer, index) => (
                        <div className="block_answer d-flex" onClick={isAnswerCorrect | press ? null : () => handleAnswerChange(answer.id_answer, answer.is_correct)} key={answer.id_answer}>
                          <div className="block_content">
                            <input
                              type="radio"
                              className="btn-radio"
                              id={answer.id_answer}
                              value={answer.id_answer}
                              checked={selectedAnswer === answer.id_answer}
                              onChange={isAnswerCorrect | press ? null : () => handleAnswerChange(answer.id_answer)}
                            />
                            <label className={`answer-label ${isAnswerCorrect && selectedAnswer === answer.id_answer ? "correct_answer" : selectedAnswer === answer.id_answer & press ? "uncorrect_answer" : ""}`}>{answer.answer}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={checkAnswer}
                      disabled={!selectedAnswer || press}
                      className="btn">Ответить</button>
                    <button className={`btn replay ${!isAnswerCorrect & press ? "none" : null}`} onClick={restart}>Заново</button>
                  </div>
                )}
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
                  disabled={!isAnswerCorrect || currentIndex === Data.length - 1}
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