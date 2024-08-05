import "./App.css";

//import React and useState, useEffect hooks
import React, { useEffect, useState } from "react";

//import images for the project
import iconDice from "../src/assets/icon-dice.svg";
import dividerDesktop from "../src/assets/pattern-divider-desktop.svg";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch advice from the API - asynchronous arrow function - updates the state with fetched advice and updates the error state if an error
  const fetchAdvice = async () => {
    // sets loading state to true indicating that a data fetch is in progress
    setLoading(true);
    // try block to handle potential errors
    try {
      // fetch API to make an HTTP GET request to the URL advice generator API
      // await keyword pauses the execution of the function until the request is complete and response received
      const response = await fetch("https://api.adviceslip.com/advice");
      // this parses the JSON repsonse from the API - await function waits until JSON is fully parsed
      const result = await response.json();
      // sets the data state to the result of the parsed JSON response
      setData(result.slip);
      // sets loading state to false indicating that the data fetch is complete
      setLoading(false);
      // sets error state to null to indicate that there are no errors
    } catch (error) {
      setError(error);
      // sets loading state to false indicating that the data fetch is complete
      setLoading(false);
    }
  };

  //useEffect hook to fetch advice when the component mounts
  useEffect(() => {
    // call the fetchAdvice function when the component mounts
    fetchAdvice();
    // empty array as the second argument to ensure that the effect only runs once when the component mounts
  }, []);

  // if condition to check if the data is loading, if there is an error, or if the data is fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // if condition to check if there is an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    // React Fragment to wrap the JSX code
    <>
      <div className="flex flex-col items-center justify-center bg-dark-blue font-manrope">
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="relative flex flex-col items-center justify-center space-y-4 static-size text-center bg-dark-grayish-blue rounded-lg m-20">
            {/* data.id are properties of the data object - object contains information fetches from an external source */}
            <h1 className="text-neon-green pb-4 text-sm letter-spaced">ADVICE #{data.id}</h1>
            <div className="flex flex-col items-center justify-center">
              <pre className="text-white font-manrope font-extrabold advice-text mb-8 p-2">
                <h1>"{data.advice}"</h1>
              </pre>
            </div>
            <div>
              <img src={dividerDesktop} alt="divider mobile" />
            </div>
            {/* positions the button absolutely at the bottom with an effset of -20 pixels */}
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
