import React, { useEffect, useRef, useState } from "react";

const Otp = () => {
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
      <label htmlFor="smsCode">SMS Code:</label>
      <input
        type="text"
        id="smsCode"
        name="smsCode"
        placeholder="Enter SMS Code"
      />
      <button onClick={handleClick} disabled={isButtonDisabled}>
        {isButtonDisabled ? `Resend in ${timer}s` : "Get new Code"}
      </button>
    </>
  );
};

export default Otp;
