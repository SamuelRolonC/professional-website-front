import React from "react";
import "./TopBar.css";

function TopBar() {
    return (
        <nav className="TopBar">
            <h1>Samuel Rolon Cicciari</h1>
            <div className="TopBarSections">
                <ul>
                    <li>
                        About me
                    </li>
                    <li>
                        Work
                    </li>
                    <li>
                        Proyect
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { TopBar };