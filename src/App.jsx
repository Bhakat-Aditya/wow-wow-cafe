import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop"; // Import here

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const Layout = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== "/contact";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      <ScrollToTop /> {/* Forces scroll to top on route change */}
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main>
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
