import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item text-light"> <Link className="nav-link" to="/business">Business</Link></li> */}
                            <li className="nav-item text-light"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item text-light"> <Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item text-light"> <Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item text-light"> <Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item text-light"> <Link className="nav-link" to="/technology">Technology</Link></li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/english">English</Link></li>
                                    <li><Link class="dropdown-item" to="/german">German</Link></li>
                                    <li><Link class="dropdown-item" to="/arabic">Arabic</Link></li>
                                    <li><Link class="dropdown-item" to="/spanish">Spanish</Link></li>
                                    <li><Link class="dropdown-item" to="/french">French</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>


                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar


