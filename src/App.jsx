import Header from "./components/Header";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
      <Resume/>
    </>
  );
}

export default App;
