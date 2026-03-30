import React, { useState } from "react";

function App() {
  const moods = {
    happy: {
      emoji: "😊",
      text: "Feeling Happy!",
      color: "#fef08a"
    },
    sad: {
      emoji: "😢",
      text: "Feeling Sad...",
      color: "#bfdbfe"
    },
    angry: {
      emoji: "😡",
      text: "Feeling Angry!",
      color: "#fecaca"
    },
    calm: {
      emoji: "😌",
      text: "Feeling Calm",
      color: "#bbf7d0"
    }
  };

  const [currentMood, setCurrentMood] = useState(moods.happy);

  return (
    <div style={{ ...styles.container, background: currentMood.color }}>
      <h1>Mood Vibe Tracker ✨</h1>

      <div style={styles.moodBox}>
        <h2>{currentMood.emoji}</h2>
        <p>{currentMood.text}</p>
      </div>

      <div style={styles.buttons}>
        <button onClick={() => setCurrentMood(moods.happy)}>Happy</button>
        <button onClick={() => setCurrentMood(moods.sad)}>Sad</button>
        <button onClick={() => setCurrentMood(moods.angry)}>Angry</button>
        <button onClick={() => setCurrentMood(moods.calm)}>Calm</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    textAlign: "center",
    paddingTop: "100px",
    transition: "0.5s"
  },
  moodBox: {
    fontSize: "30px",
    margin: "30px 0"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  }
};

export default App;