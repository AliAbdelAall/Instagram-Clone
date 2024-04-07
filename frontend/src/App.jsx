// React stuff
import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// Redux
import { Provider } from "react-redux";
import { store } from "./Core/redux/store"

// taostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Auth from "./pages/Authentication"

// Auth components
import Login from "./pages/Authentication/components/Login";
import Signup from "./pages/Authentication/components/Signup";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}>
          <Route index element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Route>

        {/* <Route path="/main" element={<Main/>}>
          <Route path="feed" index element={<Feed/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route> */}

      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
