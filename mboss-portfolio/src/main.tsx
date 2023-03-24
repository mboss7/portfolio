import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import "./Style.css";

const app =
<>    
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="resume" element={<Resume />} />
    <Route path="experiences" element={<Experiences />} />
    <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
</BrowserRouter>
<footer>test</footer>
</>;


const domroot = document.getElementById('root') as Element;

const root = ReactDOM.createRoot(domroot);
root.render(app);