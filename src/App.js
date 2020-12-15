import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Pop: [
    { name: "Uptown Funk", rating: "4/5" },
    { name: "Closer", rating: "3.5/5" },
    { name: "Shape of you", rating: "4.5/5" },
    { name: "Dance Monkey", rating: "4/5" },
    { name: "Bad Liar", rating: "5/5" },
    { name: "Believer", rating: "4.5/5" }
  ],

  Love: [
    { name: "My heart will go on", rating: "5/5" },
    { name: "Senorita", rating: "4.5/5" },
    { name: "A thousand years", rating: "4.5/5" },
    { name: "Perfect", rating: "4/5" },
    { name: "Rise", rating: "4.5/5" },
    { name: "No Control", rating: "4.5/5" }
  ],

  EDM: [
    { name: "Takeaway", rating: "3.5/5" },
    { name: "Titanium", rating: "5/5" },
    { name: "Lean on", rating: "4.5/5" },
    { name: "High on life", rating: "4/5" },
    { name: "Feel so close", rating: "4.5/5" },
    { name: "Blank Space", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("EDM");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App" style={{ backgroundColor: "violet" }}>
      <h1> 🎵 My Music Album </h1>
      <p> This is my personalised list of music album </p>
      {/* rgb(103 100 107) */}
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "rgb(103 100 107)",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* <hr /> */}
      <div style={{ textAlign: "left", backgroundColor: "violet" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "40%",
                // Align:"center",
                margin: "1rem 20rem",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(110 24 189)"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
