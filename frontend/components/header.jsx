import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return(
      <header id="header">
        <a onClick={this.props.loadGallery}>
          <div className="logo">
            <div className="logo-container">
              <h1 className="logo-h1">Highland Portraits</h1>
            </div>
          </div>
        </a>
          <ul className='nav'>
            <li id="home" className="active" onClick={this.props.loadGallery}>HOME</li>
            <li id="services" onClick={this.props.loadServices}>SERVICES</li>
            <li id="contact" onClick={this.props.loadContact}>CONTACT</li>
          </ul>

          <div className="nav-2">
            <a className="hvr-push" id="book-now" onClick={this.props.toggleBookNow}>
              <p>BOOK NOW</p>
            </a>
                <div className="external-links">
              <a href="https://www.facebook.com/highlandportraits/" className="facebook-icon">
                <span className="external-link first fa fa-facebook-official"></span>
              </a>
              <a href="https://www.instagram.com/highlander9968/" className="instagram-icon">
                <span className="external-link fa fa-instagram"></span>
              </a>
              <a href="mailto:matt@highlandportraits.com" className="mail-icon">
                <span className="external-link fa fa-envelope"></span>
              </a>
            </div>
          </div>
          <p className="serving">Serving the East Bay since 2015</p>
      </header>
    )
  }
}

export default withRouter(Header);
