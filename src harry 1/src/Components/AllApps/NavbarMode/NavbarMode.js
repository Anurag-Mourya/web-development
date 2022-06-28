//export in App2.js..



//this Navbar component is connected with App2.js...
//this is the react function based components...
import React from "react";


//for checking the future bug.
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function NavbarMode(props) {
    return (

        // this code is written for ModeApp.js
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

            {/* this code is App2.js */}
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >{props.Title}  </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/Home'>{props.MyHome}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Aboutus'>{props.About}</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='TextFormMode'>{props.TextForm}</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2 bg-primary" style={{ width: '40px', height: '40px' }} onClick={() => props.toggleMode('primary')}></div>

                        <div className="bg-primary rounded mx-2 bg-success" style={{ width: '40px', height: '40px'}} onClick={() => props.toggleMode('success')}></div>

                        <div className="bg-primary rounded mx-2 bg-danger" style={{ width: '40px', height: '40px'}} onClick={() => props.toggleMode('danger')}></div>

                        <div className="bg-primary rounded mx-2 bg-warning" style={{ width: '40px', height: '40px'}} onClick={() => props.toggleMode('warning')}></div>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className={`btn btn-outline-success text-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit">Search</button>
                    </form>

                    {/* <div className="form-check form-switch mx-4">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div> */}

                    {/* <div className="form-check form-switch mx-4">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => props.toggleMode(null)} />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div> */}
                </div>
            </div>
        </nav >
    )
};


//For dubg purpose..
NavbarMode.prototype = {
    Title: PropTypes.string.isRequired,
    MyHome: PropTypes.string
}

// comment the top prototype to run this.set default Props.. If we are not passing the props.. 
NavbarMode.defaultProps = {
    Title: 'MyLogo',
    MyHome: 'MeraHome'
};