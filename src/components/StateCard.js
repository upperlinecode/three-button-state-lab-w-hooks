import React, { useState } from "react";

const StateCard = () => {
  // State variables
  const [button1, setButton1] = useState("On!");
  const [button2, setButton2] = useState(0);
  // button3 should default to "you" and cycle through an encouraging message when pressed

  // Functions to handle button presses.
  const handleButton1 = () => {
    alert("Button 1 pressed!");
  };
  const handleButton2 = () => {};
  const handleButton3 = () => {};

  // Return for the stateCard component.
  return (
    <div className="StateCard">
      <h2>Press some buttons!</h2>
      <div className="card-content">
        <div className="item">
          <button onClick={handleButton1}>Button 1</button>
          <p>Current status: {button1}</p>
        </div>
        <div className="item">
          <button onClick="FIX_THIS_EVENT">Button 2</button>
          <p>Current count: ADD_STATE_HERE</p>
        </div>
        <div className="item">
          <button onClick="FIX_THIS_EVENT">button 3</button>
          <p>Current word: ADD_STATE_HERE</p>
        </div>
      </div>
    </div>
  );
};

export default StateCard;
