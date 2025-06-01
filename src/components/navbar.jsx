import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Places</li>
          <li>Foods</li>
        </ul>
      </div>
    </nav>
  );
}
