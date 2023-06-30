import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to={"/"}>
            Home
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link className='nav-item nav-link' to={"/movie"}>
                Movie list
              </Link>
              <Link className='nav-item nav-link' to={"/character"}>
                characters
              </Link>
              <Link className='nav-item nav-link' to={"/book"}>
                book list
              </Link>
            </div>
          </div>
        </nav>
        <div className='App'>
          <h1>Home Page</h1>
        </div>
      </>
    );
  }
}

export default HomePage;
