import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="/home">
                    Quiz APP
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </ li >
                        <li className="nav-item">
                            <a href="#quizzes" className="nav-link">Quizzes</a>
                        </ li >
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Team</a>
                        </ li >
                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            < li >
                            <Link to="/"><button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Logout</button></Link>
                            </ li >
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	) ;
  }
}

export  default  Navbar ;