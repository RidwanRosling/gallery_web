export default function NavFilter({ searchTerm, changeSearchTerm }) {
  return (
    <>
      <h1 className="title" style={{ letterSpacing: "4px" }}>
        Indonesia Nature
      </h1>

      <nav className="filter-navbar">
        <ul className="filter-navbar-list">
          {["mountain", "sea", "forest", "desert"].map((term) => (
            <li key={term} className={searchTerm === term ? "active" : ""}>
              <button
                onClick={() => changeSearchTerm(term)}
                className="button-filter"
              >
                {/* ⬇️ if the first letter /index[0] term is lower it's change to upper 
                  term.slice(1) <-- get the index 1 to index last = ountain
                  */}
                {term.charAt(0).toUpperCase() + term.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
