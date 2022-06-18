import React from 'react';



function Nav(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 🖱️</span> Mack Hansen
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentPage("about")}>About Me</span>
          </li>
          <li className={currentPage === "projects" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentPage("projects")}>Projects</span>
          </li>
      </ul>
    </nav>
    </header >
  );
}

export default Nav;
