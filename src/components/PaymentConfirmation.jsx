import React, { useState } from "react";
import Otp from "./Otp";

const PaymentConfirmation = ({
  onChangeStep,
  cardNumber,
  recipientCardNumber,
  transferAmount,
}) => {
  return (
    <section className="infoContainer">
      <p className="transferTitle">Payment Verification</p>
      <div className="labelInput2Container">
        <label htmlFor="cvv2">Card Security Code (CVV2):</label>
        <input
          type="number"
          id="cvv2"
          name="cvv2"
          placeholder="Enter CVV2"
          className="cvv2Input"
        />
      </div>
      <div className="labelInput2Container">
        <label htmlFor="expiryDate">Expiration Date (MM/YY):</label>
        <div className="expiry">
          <input
            type="number"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM"
            className="confirmInputs"
          />
          <input
            type="number"
            id="expiryDate"
            name="expiryDate"
            placeholder="YY"
            className="confirmInputs"
          />
        </div>
      </div>
      <Otp />
      <div className="secDetailsContainer">
        <h3 className="sectitledetails">Details:</h3>
        <p className="secdetails">Card Number: {cardNumber}</p>
        <p className="secdetails">
          Recipient's Card Number: {recipientCardNumber}
        </p>
        <p className="secdetails">Transfer Amount: {transferAmount}</p>
      </div>
      <button
        onClick={() => onChangeStep("transferDetails")}
        className="previousBtn"
      >
        Previous Step
      </button>
      <button className="transferBtn">Transfer Funds</button>
    </section>
  );
};

export default PaymentConfirmation;
