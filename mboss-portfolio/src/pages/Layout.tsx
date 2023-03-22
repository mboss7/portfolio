import { Outlet, Link } from "react-router-dom";
import '../Style.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Resume">Resume</Link>
          </li>
          <li>
            <Link to="Experiences">Experiences</Link>
          </li>
          <li>
            <Link to="Projects">Projects</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> 

      <footer>Test</footer>
    </>
  )
};

export default Layout;