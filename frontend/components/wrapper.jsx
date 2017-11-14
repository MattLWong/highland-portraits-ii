import React from 'react';
import Gallery from './gallery';
import Services from './services';
import Contact from './contact';
import Header from './header';
import Info from './info';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryVisible: true,
      servicesVisible: false,
      infoVisible: false,
      contactVisible: false
    }
    this.loadServices = this.loadServices.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.loadInfo = this.loadInfo.bind(this);
    this.loadContact = this.loadContact.bind(this);
  }
  loadServices() {
    this.removeClasses();
    document.getElementById("services").classList.add("active");
    if (this.state.servicesVisible == false) {
      this.setState({galleryVisible: false, infoVisible: false, contactVisible: false}, () => {
        this.setState({servicesVisible: true})
      })
    }
  }
  loadGallery() {
    this.removeClasses();
    if (this.state.galleryVisible == false) {
      this.setState({servicesVisible: false, infoVisible: false, contactVisible: false}, () => {
        this.setState({galleryVisible: true})
      })
    }
  }
  loadInfo() {
    this.removeClasses();
    document.getElementById("info").classList.add("active");
    if (this.state.infoVisible == false) {
      this.setState({servicesVisible: false, galleryVisible: false, contactVisible: false}, () => {
        console.log("Hello");
        this.setState({infoVisible: true})
      })
    }
  }
  loadContact() {
    this.removeClasses();
    document.getElementById('contact').classList.add("active");
    if (this.state.contactVisible == false) {
      this.setState({servicesVisible: false, galleryVisible: false, infoVisible: false}, () => {
        this.setState({contactVisible: true})
      })
    }
  }

  removeClasses() {
    document.getElementById("services").classList.remove("active")
    document.getElementById('info').classList.remove("active")
    document.getElementById('contact').classList.remove("active")
  }

  render() {

    return(
      <div className="wrapper">
        <Header
          loadServices = {this.loadServices}
          loadGallery = {this.loadGallery}
          loadInfo = {this.loadInfo}
          loadContact = {this.loadContact}
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
      </div>
    )
  }
}

export default Wrapper;
