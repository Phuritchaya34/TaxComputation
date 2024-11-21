import React from "react";
import FormData from "./pages/FormData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormData />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;