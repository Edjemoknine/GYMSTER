import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Exercices from "./pages/Exercices";
import Contact from "./pages/Conatct";
import Home from "./pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import { Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import ExerciceDetail from "./pages/ExerciceDetail";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  const [term, setTerm] = useState("");
  return (
    <div>
      <Header />
      <SkeletonTheme baseColor="#ccc" highlightColor="#ddd">
        <Routes>
          <Route path="/" element={<Home term={term} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/exercices"
            element={
              // <Suspense fallback={"loading..."}>
              <Exercices term={term} setTerm={setTerm} />
              /* </Suspense> */
            }
          />
          <Route
            path="/exercice/:id"
            element={
              <Suspense fallback={"loading..."}>
                <ExerciceDetail term={term} />
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SkeletonTheme>
      <Footer />
    </div>
  );
}

export default App;
