import React from 'react';
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
    this.loadInfo = this.loadInfo.bind(this);
    this.loadContact = this.loadContact.bind(this);
    this.toggleBookNow = this.toggleBookNow.bind(this);
  }

  componentDidMount() {
    setTimeout(function() {
      document.getElementById('banner').style.top = "0px"
    }, 1000)

    window.addEventListener('scroll', function(e) {
      let y = window.scrollY;
      console.log(y);
      if (y > 350) {
        document.getElementById('banner').style.top = "-51px"
      } else {
        document.getElementById('banner').style.top = "0px"
      }
    })
  }

  loadServices() {
    this.removeClasses();
    document.getElementById("services").classList.add("active");
    if (this.state.servicesVisible == false) {
      this.setState({galleryVisible: false, infoVisible: false, contactVisible: false}, () => {
        this.setState({servicesVisible: true})
        window.scrollTo(0,0);
      })
    }
  }
  loadGallery() {
    this.removeClasses();
    document.getElementById("home").classList.add("active");
    if (this.state.galleryVisible == false) {
      this.setState({servicesVisible: false, infoVisible: false, contactVisible: false}, () => {
        this.setState({galleryVisible: true})
        window.scrollTo(0,0);
      })
    }
  }
  loadInfo() {
    this.removeClasses();
    document.getElementById("info").classList.add("active");
    if (this.state.infoVisible == false) {
      this.setState({servicesVisible: false, galleryVisible: false, contactVisible: false}, () => {
        this.setState({infoVisible: true})
        window.scrollTo(0,0);
      })
    }
  }
  loadContact() {
    this.removeClasses();
    document.getElementById('contact').classList.add("active");
    if (this.state.contactVisible == false) {
      this.setState({servicesVisible: false, galleryVisible: false, infoVisible: false}, () => {
        this.setState({contactVisible: true}
        )
        window.scrollTo(0,0);
      })
    }
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
          { this.state.galleryVisible ?
            (<Gallery/>) : null
          }
          { this.state.servicesVisible ?
            <Services/> : null
          }
          { this.state.infoVisible ?
            <Info/> : null
          }
          { this.state.contactVisible ?
            <Contact/> : null}

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

export default Wrapper;
