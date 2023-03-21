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
         Made with passion by M4tt 
        </p>
      </div>

      
    </>
  )
};

export default Layout;