import React from 'react';
import { Routes, Route } from "react-router-dom";
import pages from "./Pages";

function App() {
  return (
      <Routes>
          {Object.values(pages).map((page) => <Route path={page.path} element={page.element} />)}
      </Routes>
  );
}

export default App;
