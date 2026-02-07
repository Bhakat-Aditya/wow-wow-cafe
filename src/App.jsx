import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// import Gallery from './pages/Gallery'; // We will build this next
import Contact from './pages/Contact';

// Temporary Placeholders
const Gallery = () => (
  <div className="h-screen bg-black text-white flex items-center justify-center">
    Gallery Coming Soon
  </div>
);

const Layout = ({ children }) => {
  const location = useLocation();
  // Hide footer ONLY on /contact page
  const showFooter = location.pathname !== "/contact";

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
