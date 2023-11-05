import "./App.css";

//Components

//Pages
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
