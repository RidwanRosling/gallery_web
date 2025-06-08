import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

export default function Navbar({ setSearchTerm }) {
  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.querySelector("input").value;
    setSearchTerm(query);
    event.target.reset(); // Reset input setelah pencarian
    console.log(query);
  }

  return (
    <nav id="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-ul">
        <li className="link-nav">Gallery</li>
        <li className="link-nav">Category</li>
        <li className="link-nav">contact</li>
      </ul>

      <form id="search" onSubmit={handleSubmit} className="search-wrapper">
        <div className="search-input-wrapper">
          <input
            className="input-search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch className="search-icon" />
        </div>
      </form>
    </nav>
  );
}
