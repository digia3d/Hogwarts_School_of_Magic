import React, { useEffect, useState } from 'react';
import { questions } from '../../../data/Question';
import './Quiz.css';

function Quiz() {
  // Questions and house reveal setters
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showHouse, setShowHouse] = useState(false);

  // Total score per house setters
  const [totalGryffindor, setGryffindor] = useState(0);
  const [totalSlytherin, setSlytherin] = useState(0);
  const [totalRavenclaw, setRavenclaw] = useState(0);
  const [totalHufflepuff, setHufflepuff] = useState(0);

  // Final result setter
  const [house, setHouse] = useState('Muggle');

  // Sorting function
  const answerHandler = (gryffindor, slytherin, ravenclaw, hufflepuff) => {
    setGryffindor(totalGryffindor + gryffindor);
    setSlytherin(totalSlytherin + slytherin);
    setRavenclaw(totalRavenclaw + ravenclaw);
    setHufflepuff(totalHufflepuff + hufflepuff);

    /* eslint-disable global-require */

    switch (Math.max(totalGryffindor, totalSlytherin, totalRavenclaw, totalHufflepuff)) {
      case totalGryffindor:
        setHouse('Gryffindor');
        break;
      case totalSlytherin:
        setHouse('Slytherin');
        break;
      case totalRavenclaw:
        setHouse('Ravenclaw');
        break;
      case totalHufflepuff:
        setHouse('Hufflepuff');
        break;
      default:
        break;
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowHouse(true);
    }
  };
  const [banner, setBanner] = useState('');
  const changeBanner = () => {
    if (house === 'Gryffindor' && showHouse === true) {
      setBanner(require('../../../assets/banners/Gryffindor.jpg'));
    }
    if (house === 'Slytherin' && showHouse === true) {
      setBanner(require('../../../assets/banners/Slytherin.jpg'));
    }
    if (house === 'Ravenclaw' && showHouse === true) {
      setBanner(require('../../../assets/banners/Ravenclaw.jpg'));
    }
    if (house === 'Hufflepuff' && showHouse === true) {
      setBanner(require('../../../assets/banners/Hufflepuff.jpg'));
    }
  };
  useEffect(() => {
    changeBanner();
  });
  return (
    <div className="quiz">
      <div className="main-title">
        <h1>The Sorting Hat</h1>
      </div>
      <div
        className="app"
        style={{
          borderRadius: '7px',
          backgroundPosition: '100%',
          backgroundBlendMode: 'normal',
          backgroundImage: `url(${banner})`,
        }}
      >
        {showQuiz ? (
          <div>
            {showHouse ? (
              <>
                <div className="result">
                  <h2>You belong in</h2>
                  <br />
                  <p className="house">{house}</p>
                </div>
                <button
                  type="button"
                  className="back-button"
                  onClick={() => {
                    window.location.href = '/';
                  }}
                >
                  Back
                </button>
              </>
            ) : (
              <>
                <div className="part-two">
                  <div className="question-section">
                    <div className="question-count">
                      <span>
                        Question
                        {currentQuestion + 1}
                      </span>
                      /
                      {questions.length}
                    </div>
                    <div className="question-text">{questions[currentQuestion].questionText}</div>
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                      <button
                        type="button"
                        key={answerOption.id}
                        onClick={() => {
                          answerHandler(
                            answerOption.gryffindor,
                            answerOption.slytherin,
                            answerOption.ravenclaw,
                            answerOption.hufflepuff,
                          );
                        }}
                      >
                        {answerOption.optionText}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="intro-part">
              <div className="intro-text">
                <p>
                  Welcome to the Grand Hall! Here you&apos;ll be asked a series of questions, and
                  you must answer as truthfully as you can. By the end, the hat will decide and tell
                  you where you belong.
                </p>
              </div>
              <button
                type="button"
                className="start-button button-loader"
                onClick={() => setShowQuiz(true)}
              >
                Start
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    /* eslint-enable global-require */
  );
}

export default Quiz;
