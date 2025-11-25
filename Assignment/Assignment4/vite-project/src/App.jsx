import React from "react";
import UserCard from './components/UserCard';
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Smart User Card</h1>
      <UserCard />
    </div>
  );
}

export default App;