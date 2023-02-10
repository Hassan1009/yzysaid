import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className=" flex flex-row mx-auto pt-5 justify-between">
        <button
          onClick={handleClick}
          className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full shadow-sm shadow-slate-600 font-kindergarten"
        >
          YZY SAID
        </button>

        <a href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x">
          <img
            src="https://i.pinimg.com/236x/d6/c1/6e/d6c16eba007d82a6a358be9a62b73933.jpg"
            alt="Spotify Icon"
            height="30"
            width="30"
          />
        </a>
      </nav>
      <div className="flex flex-col items-center justify-between">
        <div className="flex">
          <p className=" font-kindergarten flex text-black pt-20 font-semibold text-2xl">
            " {quote} "
          </p>
        </div>

        <div className="flex pt-24 pr-5 flex-col justify-items-end">
          <div>
            <img
              src="https://i.pinimg.com/236x/9e/5e/6c/9e5e6ce02702e8e60f50fc0b3e7c62f0.jpg"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
