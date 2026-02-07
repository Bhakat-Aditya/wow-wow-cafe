import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Temporary placeholders until you create these files
const Menu = () => (
  <div className="h-screen flex items-center justify-center text-4xl">
    Menu Page Coming Soon
  </div>
);
const Gallery = () => (
  <div className="h-screen flex items-center justify-center text-4xl">
    Gallery Page Coming Soon
  </div>
);
const Contact = () => (
  <div className="h-screen flex items-center justify-center text-4xl">
    Contact Page Coming Soon
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* The Home Page */}
        <Route path="/" element={<Home />} />

        {/* Future Pages */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
