import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const questions = [
  {
    question: "1) Ի՞նչ միավորով է չափվում լիցքը միավորների ՄՀ-ում:",
    options: [
      "1Օմ",
      "1Կլ",
      "1Վ",
      "1Ա",
    ],
    correct: 1,
  },
  {
    question: "2) Թվարկված ո՞ր մասնիկներն ունեն դրական լիցք:",
    options: [
      "Էլեկտրոնը:",
      "Նեյտրոնը:",
      "Պրոտոնը:",
      "Էլեկտրոնը և պրոտոնը::",
    ],
    correct: 3,
  },
  {
    question: "3) Ե՞րբ է չեզոք ատոմը դառնում դրական իոն։",
    options: [
      " Երբ կորցնում է էլեկտրոն։",
      " Երբ կորցնում է պրոտոն:",
      " Երբ կորցնում է նեյտրոն:",
      " Երբ նրան միանում է էլեկտրոն:",
    ],
    correct: 1,
  },
  {
    question: "4) Ապակե ձողը շփեցին մետաքսով: Որքա՞ն է ապակու և մետաքսի վրա առաջացած լիցքերի հարաբերությունը, եթե սկզբում դրանք էլեկտրաչեզոք էին:",
    options: [
      "-1",
      "1",
      "0",
      "2",
    ],
    correct: 2,
  },
  {
    question: "5) Երկու անշարժ կետային լիցքերի էլեկտրաստատիկ փոխազդեցու թյան ուժի մոդուլն F է: Որքա՞ն կլինի այն, եթե լիցքերից մեկի մոդուլը մեծացնենք 2 անգամ, իսկ մյուսինը փոքրացնենք 4 անգամ։",
    options: [
      "0",
      "F/2",
      "2F",
      "8F",
    ],
    correct: 1,
  },
  {
    question: "6) Բրդով շփելիս պլաստմասսայե քանոնը լիցքավորվում է բացասական լիցքով: Ինչո՞վ է դա պայմանավորված:",
    options: [
      "Էլեկտրոնները բրդից անցնում են քանոնին:",
      "Պրոտոնները քանոնից անցնում են բրդին:",
      "Էլեկտրոնները քանոնից անցնում են բրդին: ",
      "Պրոտոնները բրդից անցնում են քանոնին:",
    ],
    correct: 0,
  },
  {
    question: "7) Ինչպե՞ս պետք է փոխել երկու կետային լիցքերի միջև 1 հեռավորություն նը, որպեսզի նրանցից յուրաքանչյուրի լիցքը 4 անգամ մեծացնելիս փոխազդեցության ուժը չփոխվի:",
    options: [
      "Պետք է մեծացնել 2 անգամ:",
      "Պետք է մեծացնել 4 անգամ:",
      "Պետք է փոքրացնել 2 անգամ:",
      "Պետք է փոքրացնել 4 անգամ:",
    ],
    correct: 1,
  },
];

function Quiz() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (index, optionIndex) => {
    if (!checked) {
      const updatedAnswers = [...answers];
      updatedAnswers[index] = optionIndex;
      setAnswers(updatedAnswers);
    }
  };

  const handleCheck = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        totalScore += 10 / 7; // Каждое правильное добавляет 1.4 балла
      }
    });
    setScore(totalScore);
    setChecked(true);
  };
  const getScoreClass = (score) => {
    if (score >= 9) return "green-score";
    if (score >= 7) return "blue-score";
    if (score >= 5) return "yellow-score";
    return "red-score"; // For 1, 2, 3, or 4
  };
  return (
    <div className="quiz">
      <Link to="/" className="back-link">← հետ դեպի կենսագրություն</Link>
      <div className={`score ${getScoreClass(score)}`}>դուք հավաքեցիք  <span className="score-text">{Math.floor(score.toFixed(1))}</span> միավորներ:</div>
      {questions.map((q, index) => (
        <div key={index} className="question-box">
          <div className="question">
            {q.question}
          </div>
          <div className="options">
            {q.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleClick(index, optionIndex)}
                className={`option ${
                  checked
                    ? optionIndex === q.correct
                      ? "correct"
                      : answers[index] === optionIndex
                      ? "incorrect"
                      : ""
                    : answers[index] === optionIndex
                    ? "selected"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button className="check-button" onClick={handleCheck}>
        ստուգել
      </button>
    </div>
  );
}

export default Quiz;
