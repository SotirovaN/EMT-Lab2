import React from 'react';
import {Link} from "react-router-dom";

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar- navbar-fixed bg-success">
                <a className="navbar-brand ms-2 text-white" href="/">Book Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to={"/books"}>Books</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to={"/categories"}>Categories</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link text-white" to={"/authors"}>Authors</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default header;