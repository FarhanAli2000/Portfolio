import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default App;
