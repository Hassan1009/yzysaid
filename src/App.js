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
            src="https://o.remove.bg/downloads/44d9cacd-6b6c-4f00-9120-45e4cf817af6/84267863ee3149a49f0985b470ddd892-removebg-preview.png"
            alt="Spotify Icon"
            height="30"
            width="30"
          />
        </a>
      </nav>
      <div className="flex flex-col items-center justify-between">
        <div className="flex">
          <p className=" font-kindergarten flex text-black pt-20 font-semibold text-2xl">" {quote} "</p>
        </div>

        <div className="flex pt-24 pr-5 flex-col justify-items-end">
          <div>
            <img
              src="https://o.remove.bg/downloads/79e4d2bc-bd99-4ae7-aa6f-400f23b16f86/839f2a4f6e4cfd4b7bdf8b069e5d8812-removebg-preview.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
