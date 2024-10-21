import NavBar from "../src/components/NavBar";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}

export default App;
