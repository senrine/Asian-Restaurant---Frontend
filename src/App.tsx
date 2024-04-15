import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import PrivateRoute from "./components/PrivateRoute";
import OrderPage from "./components/OrderPage";
import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "./components/Footer";

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
                <TestimonialSlider />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <UserPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <UserPage />
                <Footer />
              </>
            }
          />
          <Route path="" element={<PrivateRoute />}>
            <Route
              path="/order"
              element={
                <>
                  <Navbar />
                  <OrderPage />
                  <Footer />
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
