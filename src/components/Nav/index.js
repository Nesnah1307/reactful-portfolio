import React from 'react';

function Nav(props) {

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 🖱️</span> Mack Hansen
                </a>
            </h2>
            <nav>
            </nav>
        </header>
    );
}

export default Nav;