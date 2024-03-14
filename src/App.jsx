import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-blue-800 p-4">
      <div className="rounded-lg main-container bg-gray-100">
        <Navbar />
        <div className="px-4 overflow-hidden">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
