import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ParticipantList from "./componets/Participants/ParticipantList";
import Participant from "./types/Participant";

function App() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/participants"
          element={
            <ParticipantList
              participants={participants}
              setParticipants={setParticipants}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
