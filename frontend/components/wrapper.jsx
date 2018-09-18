import React from 'react';
import { Route, HashRouter, Link, withRouter } from 'react-router-dom';
import Cover from './cover';
import Gallery from './gallery';
import Services from './services';
import Contact from './contact';
import Header from './header';
import BookNow from './booknow';
import preload from '../util/preload';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryVisible: true,
      servicesVisible: false,
      infoVisible: false,
      contactVisible: false,
      bookNowVisible: false,
      headerVisible: true
    };
    this.loadServices = this.loadServices.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.loadContact = this.loadContact.bind(this);
    this.toggleBookNow = this.toggleBookNow.bind(this);
    this.exitCover = this.exitCover.bind(this);
    this.hideHeader = this.hideHeader.bind(this);
    this.showHeader = this.showHeader.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname == "/contact") {
      document.getElementById('contact').classList.add("active");
    } else if (this.props.location.pathname == '/services') {
      document.getElementById("services").classList.add("active");
    } else if (this.props.location.pathname == '/home'){
      document.getElementById("home").classList.add("active");
    }
    window.scrollTo(0,0);
    preload();
  }

  loadServices() {
    this.removeClasses();
    document.getElementById("services").classList.add("active");
    this.props.history.push('/services');
  }
  loadGallery() {
    this.removeClasses();
    document.getElementById("home").classList.add("active");
    this.props.history.push('/home');
  }

  loadContact() {
    this.removeClasses();
    document.getElementById('contact').classList.add("active");
    this.props.history.push('/contact');
  }
  toggleBookNow() {
    this.setState({bookNowVisible: !this.state.bookNowVisible}, () => {
      const main = document.getElementById("main");
      const header = document.getElementById('header');
      const cover = document.getElementById('cover-2');
      const booknow = document.getElementById('book-now');
      if (this.state.bookNowVisible) {
        if (main) {
          main.style.filter = "blur(2px)";
          header.style.filter = "blur(2px)";
        }
        if (cover) {
          cover.style.filter = "blur(2px)";
        }
        if (booknow) {
          booknow.classList.add("active");
        }
      } else {
        if (main) {
          main.style.filter = "";
          header.style.filter = "";
        }
        if (cover) {
          cover.style.filter = "";
        }
        if (booknow) {
          booknow.classList.remove("active");
        }
      }
    });
  }

  removeClasses() {
    document.getElementById("services").classList.remove("active");
    document.getElementById('home').classList.remove("active");
    document.getElementById('contact').classList.remove("active");
  }

  closeBanner() {
    document.getElementById("banner").style.top = "-51px";
    setTimeout(function() {
      document.getElementById('banner').style.display = "none";
    }, 200);
  }

  exitCover() {
    this.setState({headerVisible: true}, () => {
      document.getElementById("home").classList.add("active");
      this.props.history.push('/home');
    });
  }

  hideHeader() {
    this.setState({headerVisible: false});
  }

  showHeader() {
    this.setState({headerVisible: true});
  }

  render() {
    return(
        <div className="wrapper">
          { this.state.bookNowVisible ?
          <BookNow
            toggleBookNow = {this.toggleBookNow} /> : null }

          { this.state.headerVisible ?
            <Header
              loadServices = {this.loadServices}
              loadGallery = {this.loadGallery}
              loadInfo = {this.loadInfo}
              loadContact = {this.loadContact}
              toggleBookNow = {this.toggleBookNow}
              /> : null }

          <Route exact path="/" render={()=><Cover hideHeader={this.hideHeader} exitCover={this.exitCover} showHeader={this.showHeader} toggleBookNow = {this.toggleBookNow}/>} />

          { this.state.headerVisible ?
            <main id="main">
              <Route path='/home' component={Gallery}/>
              <Route path='/services'
                component={Services}/>
              <Route path='/contact' component={Contact}/>
            </main> : null
          }
        </div>

    );
  }
}

export default withRouter(Wrapper);


// <div id="banner">
//     <p className='banner-content'>Interested in attending a LinkedIn Workshop?  <a href="https://goo.gl/q5REbR" className="sign-up-here">Sign up here!</a></p>
//     <p className='banner-close fa fa-times' onClick= { this.closeBanner }></p>
// </div>


//THIS GOES  at the top of Component Did Mount
// setTimeout(function() {
//   document.getElementById('banner').style.top = "0px";
// }, 1000);
// window.addEventListener('scroll', function(e) {
//   let y = window.scrollY;
//   if (y > 350) {
//     document.getElementById('banner').style.top = "-51px";
//   } else {
//     document.getElementById('banner').style.top = "0px";
//   }
// });
