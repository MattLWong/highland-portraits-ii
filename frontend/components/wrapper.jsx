import React from 'react';
import { Route, HashRouter, Link, withRouter } from 'react-router-dom'

import Gallery from './gallery';
import Services from './services';
import Contact from './contact';
import Header from './header';
import Info from './info';
import BookNow from './booknow';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryVisible: true,
      servicesVisible: false,
      infoVisible: false,
      contactVisible: false,
      bookNowVisible: false
    }
    this.loadServices = this.loadServices.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.loadContact = this.loadContact.bind(this);
    this.toggleBookNow = this.toggleBookNow.bind(this);


  }

  componentDidMount() {
    setTimeout(function() {
      document.getElementById('banner').style.top = "0px"
    }, 1000)
    window.addEventListener('scroll', function(e) {
      let y = window.scrollY;
      if (y > 350) {
        document.getElementById('banner').style.top = "-51px"
      } else {
        document.getElementById('banner').style.top = "0px"
      }
    })
    this.removeClasses();
    if (this.props.location.pathname == "/contact") {
      document.getElementById('contact').classList.add("active");
    } else if (this.props.location.pathname == '/services') {
      document.getElementById("services").classList.add("active");
    } else if (this.props.location.pathname == '/'){
      document.getElementById("home").classList.add("active");
    }
    window.scrollTo(0,0);
  }

  loadServices() {
    this.removeClasses();
    document.getElementById("services").classList.add("active");
    this.props.history.push('/services')
  }
  loadGallery() {
    this.removeClasses();
    document.getElementById("home").classList.add("active");
    this.props.history.push('/')
  }

  loadContact() {
    this.removeClasses();
    document.getElementById('contact').classList.add("active");
    this.props.history.push('/contact')
  }
  toggleBookNow() {
    this.setState({bookNowVisible: !this.state.bookNowVisible}, () => {
      const main = document.getElementById("main");
      const header = document.getElementById('header');
      const booknow = document.getElementById('book-now')
      if (this.state.bookNowVisible) {
        main.style.filter = "blur(2px)";
        header.style.filter = "blur(2px)";
        booknow.classList.add("active")
      } else {
        main.style.filter = ""
        header.style.filter = "";
        booknow.classList.remove("active")
      }
    })
  }

  removeClasses() {
    document.getElementById("services").classList.remove("active")
    document.getElementById('home').classList.remove("active")
    document.getElementById('contact').classList.remove("active")
  }

  closeBanner() {
    document.getElementById("banner").style.top = "-51px"
    setTimeout(function() {
      document.getElementById('banner').style.display = "none"
    }, 200)
  }

  render() {

    return(
        <div className="wrapper">
          <Header
            loadServices = {this.loadServices}
            loadGallery = {this.loadGallery}
            loadInfo = {this.loadInfo}
            loadContact = {this.loadContact}
            toggleBookNow = {this.toggleBookNow}
            />
          <main id="main">
            <Route exact path="/" component={Gallery}/>
            <Route path='/services'
              component={Services}/>
            <Route path='/contact' component={Contact}/>

          </main>
          { this.state.bookNowVisible ?
          <BookNow
            toggleBookNow = {this.toggleBookNow} /> : null }
          <div id="banner">
              <p className='banner-content'>Interested in attending a LinkedIn Workshop?  <a href="https://goo.gl/q5REbR" className="sign-up-here">Sign up here!</a></p>
              <p className='banner-close fa fa-times' onClick= { this.closeBanner }></p>
          </div>
        </div>

    )
  }
}

export default withRouter(Wrapper);
