import "./App.css";
import React, { useEffect, useState } from "react";

//import images for the project
import iconDice from "../src/assets/icon-dice.svg";
import dividerMobile from "../src/assets/pattern-divider-mobile.svg";
import dividerDesktop from "../src/assets/pattern-divider-desktop.svg";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      setData(result.slip);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-dark-blue font-manrope">
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="relative flex flex-col items-center justify-center space-y-4 static-size text-center bg-dark-grayish-blue rounded-lg m-20">
            <h1 className="text-neon-green pt-10 pb-4">ADVICE #{data.id}</h1>
            <div className="flex flex-col items-center justify-center">
              <pre className="text-white text-xl font-manrope advice-text">
                <h1>"{data.advice}"</h1>
              </pre>
            </div>
            <div>
              <img src={dividerMobile} alt="divider mobile" />
            </div>
            <div className="absolute bottom-[-20px]">
              <button
                className="bg-neon-green p-3 rounded-full neon-button"
                onClick={fetchAdvice}
              >
                <img src={iconDice} alt="icon dice" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
