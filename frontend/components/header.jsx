import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header>
        <a href="/">
          <div className="logo">
            <div className="logo-container">
              <h1 className="logo-h1">Highland Portraits</h1>
            </div>
          </div>
        </a>
          <ul className='nav'>
            <li className="services">SERVICES</li>
            <li className="info">INFO</li>
            <li className="contact">CONTACT</li>
          </ul>

          <div className="nav-2">
            <a className="book-now hvr-push" href="#">
              <p>BOOK NOW</p>
            </a>
                <div className="external-links">
              <a href="#" className="facebook-icon">
                <span className="external-link first fa fa-facebook-official"></span>
              </a>
              <a href="#" className="facebook-icon">
                <span className="external-link fa fa-instagram"></span>
              </a>
              <a href="#" className="mail-icon">
                <span className="external-link fa fa-envelope"></span>
              </a>
            </div>
          </div>
          <p className="serving">Serving the East Bay since 2015</p>
      </header>
    )
  }
}

export default Header;
