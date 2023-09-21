import React from 'react';
import './App.css';
import { Calendar } from "./components/Calendar/Calendar";
import {available_slots} from "./fixtures/calendarInfo"

function App() {
  return <Calendar available_slots={available_slots} />;
}

export default App;
