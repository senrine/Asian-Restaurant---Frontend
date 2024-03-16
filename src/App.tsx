import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import Order from "./components/Order";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="min-h-screen pt-10 px-6 md:px-10 mx-auto overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <Menu />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <UserPage />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <UserPage />
              </>
            }
          />
          <Route path="" element={<PrivateRoute />}>
            <Route
              path="/order"
              element={
                <>
                  <Navbar />
                  <Order />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
