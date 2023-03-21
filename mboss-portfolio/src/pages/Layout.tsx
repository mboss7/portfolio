import { Outlet, Link } from "react-router-dom";
import '../Nav.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Home">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
  
     <div className="Footer">
        <p>
         Made with passion by M4tt 
        </p>
      </div>
    </>
  )
};

export default Layout;