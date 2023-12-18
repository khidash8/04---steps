import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  //? State / Variables / Hooks
  const [step, setStep] = useState(1);

  //? Styles
  const styles = {
    backgroundColor: "#7950f2",
    color: "#fff",
  };

  //? Event Handlers
  const handleNext = (e) => {
    setStep((step) => (step < 3 ? step + 1 : step));
  };

  const handlePrevious = (e) => {
    setStep((step) => (step > 1 ? step - 1 : step));
  };

  //? JSX Render
  return (
    <div className="steps">
      {/* Numbers */}
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      {/* Message */}
      <p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>

      {/* Buttons */}
      <div className="buttons">
        <button style={styles} onClick={handlePrevious}>
          Previous
        </button>
        <button style={styles} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
