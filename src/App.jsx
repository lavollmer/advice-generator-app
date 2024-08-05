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

  const fetchAdvice = () => {
    setLoading(true);
    setError(null);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.slip); // Extract the slip object
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
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
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col items-center justify-center space-y-8 static-size text-center bg-dark-grayish-blue rounded-lg m-20">
            <h1 className="text-neon-green pt-10 pb-4">ADVICE #{data.id}</h1>
            <div className="flex flex-col items-center justify-center">
              <pre className="text-white text-xl font-manrope advice-text">
                <h1>"{data.advice}"</h1>
              </pre>
            </div>
            <div>
              <img src={dividerMobile} alt="divider mobile" />
            </div>
            <div className="absolute">
              <button
                className="relative z-10 bg-neon-green p-3 rounded-full"
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
