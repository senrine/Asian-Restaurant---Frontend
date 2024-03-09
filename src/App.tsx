import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";

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
                <Menu/>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
