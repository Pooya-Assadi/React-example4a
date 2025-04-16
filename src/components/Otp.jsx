import React, { useEffect, useRef, useState } from "react";

const Otp = () => {
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const intervalRef = useRef(null);

  const handleClick = () => {
    if (!isButtonDisabled) {
      setTimer(10);
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsButtonDisabled(false);
            setIsCodeSent(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return (
    <>
      <div className="labelInput2Container">
        <label htmlFor="smsCode">SMS Code:</label>
        <div className="smsCodeContainer">
          <input
            type="text"
            id="smsCode"
            name="smsCode"
            placeholder="Enter SMS Code"
            className="smsInput"
          />
          <button
            onClick={handleClick}
            disabled={isButtonDisabled}
            className="codeBtn"
          >
            {isButtonDisabled
              ? `Resend in ${timer}s`
              : isCodeSent
              ? "Get new Code"
              : "Get SMS Code"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Otp;
