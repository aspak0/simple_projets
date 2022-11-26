import { useState, useEffect } from "react";
import "./App.css";
import lightmodeIcon from "./assets/lightmode.png";
import darkmodeIcon from "./assets/darkmode.png";
import Header from "./components/Header/Header";
import Keypad from "./components/KeyPad/Keypad";

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];

const App = () => {
  const [isDarkmode, setisDarkmode] = useState(
    JSON.parse(localStorage.getItem("calculator-mode")) || false
  );
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("calculator-history")) || []
  );

  const keyPress = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedKeyCodes.includes(keyCode)) return;

    if (numbers.includes(key)) {
      if (key === "0") {
        if (expression.length === 0) return;
      }
      calculateResult(expression + key);
      setExpression(expression + key);
    } else if (operators.includes(key)) {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (operators.includes(lastChar)) return;
      if (lastChar === ".") return;
      setExpression(expression + key);
    } else if (key === ".") {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (!numbers.includes(lastChar)) return;
      setExpression(expression + key);
    } else if (keyCode === 8) {
      if (!expression) return;
      calculateResult(expression.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else if (keyCode === 13) {
      if (!expression) return;
      calculateResult(expression);

      const tempHistory = [...history];
      if (tempHistory.length > 20) tempHistory = tempHistory.splice(0, 1);

      tempHistory.push(expression);
      setHistory(tempHistory);
    }
  };

  const calculateResult = (exp) => {
    if (!exp) {
      setResult("");
      return;
    }
    const lastChar = exp.slice(-1);
    if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);
    const answer = eval(exp).toFixed(2) + "";
    setResult(answer);
  };

  useEffect(() => {
    localStorage.setItem("calculator-mode", JSON.stringify(isDarkmode));
  }, [isDarkmode]);

  useEffect(() => {
    localStorage.setItem("calculator-history", JSON.stringify(history));
  }, [history]);

  return (
    <>
      <div
        className="app"
        tabIndex="0"
        onKeyDown={(event) => keyPress(event.keyCode, event.key)}
        data-theme={isDarkmode ? "darkmode" : ""}
      >
        <div className="calculator-app">
          <div className="navbar">
            <div
              className="nav-toggle"
              onClick={() => setisDarkmode(!isDarkmode)}
            >
              <div
                className={`nav-toggle-circle ${
                  isDarkmode ? "nav-toggle-circle-active" : ""
                }`}
              />
            </div>
            <img src={isDarkmode ? darkmodeIcon : lightmodeIcon} alt="mode" />
          </div>

          <Header expression={expression} result={result} history={history} />
          <Keypad keyPress={keyPress} />
        </div>
      </div>
    </>
  );
};

export default App;
