import React, { useState } from "react";

const VoiceTyping = ({ onInput }) => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event) => {
      onInput(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div className="p-4 text-center">
      <button
        onClick={startListening}
        className={`p-2 rounded ${
          listening ? "bg-red-500" : "bg-blue-500"
        } text-white`}
      >
        {listening ? "Listening..." : "Start Speaking"}
      </button>
    </div>
  );
};

export default VoiceTyping;
