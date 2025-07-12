import React from "react";
import longestWord from "./Component/Leetcode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from "./Component/Section-B/LoginForm";
import Some from "./Component/Some";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/loginpage" element={<LoginPage/>} /> */}
            <Route path="/" element={<Some />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
