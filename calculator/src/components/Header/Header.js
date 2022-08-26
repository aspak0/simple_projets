import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = (props) => {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() =>{
     expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  },[props.expression]);

  return (
    <>
      <div className="header custom-scroll">
        <div className="history">
          {props.history &&
            props.history?.map((item) => (
              <p key={item + "" + Math.random() * 44}>{item}</p>
            ))}
        </div>

        <div ref={expressionRef} className="expression custom-scroll">
          <p>{props.expression}</p>
        </div>
        <br />

        <p ref={resultRef} className="result">
          {" "}
          {props.result}{" "}
        </p>
      </div>
    </>
  );
};

export default Header;
