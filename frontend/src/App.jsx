import React from "react";
import Authentication from "./Authentication";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Authentication/components/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
