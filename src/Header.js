import { useState } from "react";

export const Header = () => {
  const [Counter, setCounter] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  //   console.log("STATE IS:", state);//

  const handleDecrement = () => {
    setCounter(Counter - 2);
  };
  const twiceIncrement = () => {
    setCounter(Counter + 2);
  };
  const resetZero = () => {
    setCounter(0);
  };
  const handlechange = (event) => {
    console.log(event);
    setTextValue(event.target.value);
  };
  const onSubmitValue = (event) => {
    event.preventDefault();
    setDisplayValue(textValue);
  };

  return (
    <>
      <h1>Counter application</h1>
      <h3>Initial Value : {Counter}</h3>
      <button onClick={() => setCounter(Counter + 2)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={twiceIncrement}>Twice</button>
      <button onClick={resetZero}>Reset</button>
      <hr />
      <h1>Controlled input field</h1>
      <Form
        Value={textValue}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
      />

      <Realtime Value={textValue} />
      <Display Value={displayText} />
    </>
  );
};
