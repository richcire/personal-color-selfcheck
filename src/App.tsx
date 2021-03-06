import React from "react";
import { Reset } from "styled-reset";
import StartPage from "./pages/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import styled from "styled-components";
import "./index.css";
import ResultPage from "./pages/ResultPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Reset />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/:id" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
