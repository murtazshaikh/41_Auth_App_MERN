import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import RefreshHandler from "./RefreshHandler.tsx";

type PrivateRouteProps = {
  element: React.ReactNode;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }: PrivateRouteProps) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
