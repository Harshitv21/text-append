import { useEffect, useState } from "react";
import "../styles/InputAndOutput.css";

function InputAndOutput() {
  const [textBoxOne, setTextBoxOne] = useState("");
  const [textBoxTwo, setTextBoxTwo] = useState("");

  const [appendText, setAppendText] = useState("");

  useEffect(() => {
    setAppendText(textBoxOne + " " + textBoxTwo);
    if (!textBoxOne && !textBoxTwo) setAppendText("Start typing something...");
  }, [textBoxOne, textBoxTwo]);

  const handleChangeBoxOne = (e) => {
    // console.log("Box #1: ", e.target.value);
    setTextBoxOne(e.target.value);
  };

  const handleChangeBoxTwo = (e) => {
    // console.log("Box #2: ", e.target.value);
    setTextBoxTwo(e.target.value);
  };

  return (
    <>
      <div className="input-and-output">
        <div>
          <div className="input-group mb-3 input-box-container">
            <span className="input-group-text">#1</span>
            <input
              type="text"
              className="form-control input-box"
              placeholder="Enter some text"
              aria-label="Username"
              onChange={(e) => handleChangeBoxOne(e)}
              maxLength={20}
            ></input>
            <span className="input-group-text">#2</span>
            <input
              type="text"
              className="form-control input-box"
              placeholder="Enter some text"
              aria-label="Server"
              maxLength={20}
              onChange={(e) => handleChangeBoxTwo(e)}
            ></input>
          </div>
          <div className="output-display">
            <p>{appendText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputAndOutput;
