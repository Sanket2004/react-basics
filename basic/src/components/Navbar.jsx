import { Link } from "react-router-dom";

function Navbar({ title, search }) {
  return (
    <nav>
      <h1>{title}</h1>
      {/* <input type="text" placeholder={search} /> */}
      <div className="links">
        <Link to="/">Home</Link> |<Link to="/menu">Menu</Link> |
        <Link to="/setting">Setting</Link>
      </div>
    </nav>
  );
}

export default Navbar;
