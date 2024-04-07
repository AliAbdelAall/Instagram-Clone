// React stuff
import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// taostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Auth from "./Authentication"

// Auth components
import Login from "./Authentication/components/Login";
import Signup from "./Authentication/components/Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/auth" element={<Auth/>}>
        <Route path="login" index element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>

      {/* <Route path="/main" element={<Main/>}>
        <Route path="feed" index element={<Feed/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route> */}

    </Routes>
    </BrowserRouter>
  );
}

export default App;
