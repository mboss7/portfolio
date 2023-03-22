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

      <div className="Header">
        <h1>M4tt Portfolio</h1>
      </div>
     <div className="Footer">
        <p>
        Made with passion in React on Firebase by M4tt 
        </p>
      </div>

      
    </>
  )
};

export default Layout;