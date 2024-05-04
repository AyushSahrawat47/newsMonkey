import React, {useState} from 'react'
import { Link, } from 'react-router-dom'

function Navbar({ setCountry, setValue,value }) {
    const [inputValue, setInputValue] = useState('');
    const handleCountryChange = (event) => {
        setCountry(event.target.id);
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    const handleSearch = async() => {
       await setValue(inputValue);
    }
    const value0 = () => {
        setValue('');
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark  navbar-dark ">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li onClick={value0} className="nav-item text-light"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li onClick={value0} className="nav-item text-light"> <Link className="nav-link" to="/health">Health</Link></li>
                            <li onClick={value0} className="nav-item text-light"> <Link className="nav-link" to="/science">Science</Link></li>
                            <li onClick={value0} className="nav-item text-light"> <Link className="nav-link" to="/sports">Sports</Link></li>
                            <li onClick={value0} className="nav-item text-light"> <Link className="nav-link" to="/technology">Technology</Link></li>
                            <li onClick={value0} className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link>
                                <ul className="dropdown-menu" >
                                    <li><Link onClick={handleCountryChange} id="in" value="in" className="dropdown-item">India</Link></li>
                                    {/* <li><Link onClick={handleCountryChange} id="en" value="en" className="dropdown-item">England</Link></li> */}
                                    <li><Link onClick={handleCountryChange} id="us" value="us" className="dropdown-item">United States</Link></li>
                                    {/* <li><Link onClick={handleCountryChange} id="ru" value="ru" className="dropdown-item">Russia</Link></li> */}
                                    <li><Link onClick={handleCountryChange} id="jp" value="jp" className="dropdown-item">Japan</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input value={inputValue} onChange={handleInputChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Link to={`/everything`}><button onClick={handleSearch} className="btn btn-outline-success" type="button">Search</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


