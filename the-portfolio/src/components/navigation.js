import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
