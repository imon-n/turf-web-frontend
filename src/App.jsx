import { Outlet } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import ScrolltoTop from "../ScrolltoTop";

export default function App() {
  return (
    <>
      <div>
        <ScrolltoTop />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
