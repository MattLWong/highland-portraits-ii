import React from 'react';
import { squareURLs, imageURLs, frozenURLs, captions } from './constants';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: {display: 'none'},
      frozenStyle: {opacity: '1'}
    };
  }

  handleFrozenImageLoaded() {
    this.setState({imageStatus: {display: 'block'}});
  }

  reduceOpacity() {
    this.setState({frozenStyle: {opacity: '0'}});
  }

  render() {
    return(
      <div className="modal">
        <div className="overlay"
          onClick={() => this.props.toggleModal('off') }>
        </div>
        <div className="frame" id="frame"
          style={this.state.imageStatus}>
          <figure>
            <div className="loader">
              <img className='image object'
                src={this.props.imageUrl}
                alt="portrait"
                onLoad={this.reduceOpacity.bind(this)}/>
              <img
                className='frozen'
                src={this.props.frozenUrl}
                alt=""
                style={this.state.frozenStyle}
                onLoad={this.handleFrozenImageLoaded.bind(this)}/>
              <div className="left"
                onClick={() => this.props.toggleModal('before', this.props.idx)}>
              </div>
              <div className='right'
                onClick={() => this.props.toggleModal('next', this.props.idx)}>

              </div>
            </div>
            <figcaption>{this.props.caption}</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: {display: 'block', opacity: 0, visibility: "hidden"}};
  }
  handleImageLoaded() {
    this.setState({style: {opacity: 1, visibility: "visible"}});
  }
  render() {
    const style = {
      background: `url(${this.props.squareUrl})`,
      backgroundSize: 'cover'
    };
    return(
      <a onClick={() => this.props.enlarge(this.props.idx)}>
        <div className='square'>
          <div className='thumbnail'
            style={this.state.style}>
            <img className='square-img'
              src={this.props.squareUrl}
              onLoad={this.handleImageLoaded.bind(this)}></img>
          </div>
        </div>
      </a>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      idx: "",
      imageUrl: "",
      frozenUrl: "",
      caption: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.enlarge = this.enlarge.bind(this);

    this.squareUrls = squareURLs;
    this.imageUrls = imageURLs;
    this.frozenUrls = frozenURLs;
    this.captions = captions;
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  toggleModal(string, i) {
    let that = this;
    if (string == "off") {
      document.getElementById('frame').style.opacity = "0";
      // document.getElementById('header').style.filter = '';
      // document.getElementById('tiles').style.filter = '';
      setTimeout(function() {
        that.setState({modalVisible: false});
      }, 200);
    } else if (string == 'next') {
      if (i == this.squareUrls.length - 1) {
        document.getElementById('frame').style.opacity = "0";
        setTimeout(function() {
          that.setState({modalVisible: false}, () => that.enlarge(0));
        }, 200);
      } else {
        document.getElementById('frame').style.opacity = "0";
        setTimeout(function() {
          that.setState({modalVisible: false}, () => that.enlarge(i+1));
        }, 200);
      }
    } else if (string == 'before') {
      if (i == 0) {
        document.getElementById('frame').style.opacity = "0";
        setTimeout(function() {
          that.setState({modalVisible: false}, () => that.enlarge(that.squareUrls.length-1));
        }, 200);
      } else {
        document.getElementById('frame').style.opacity = "0";
        setTimeout(function() {
          that.setState({modalVisible: false}, () => that.enlarge(i-1));
        }, 200);
      }
    }
  }

  renderSquares() {
    return this.squareUrls.map( (url, idx) => {
      return(<Square
        key={idx}
         idx={idx}
         squareUrl={this.squareUrls[idx]}
         enlarge={this.enlarge}
         toggleModal={this.toggleModal}
         alt={this.captions[idx]}
         />);
    });
  }

  enlarge(id) {
    this.setState({
      idx: id,
      imageUrl: this.imageUrls[id],
      frozenUrl: this.frozenUrls[id],
      caption: this.captions[id],
      modalVisible: true
    }, function() {
      //blur header and main
      // document.getElementById('header').style.filter = 'blur(2px)';
      // document.getElementById('tiles').style.filter = 'blur(2px)';
    });
  }

  render() {
    return(
      <div className="gallery">
        { this.state.modalVisible
          ? (<Modal
            idx={this.state.idx}
            imageUrl={this.state.imageUrl}
            frozenUrl={this.state.frozenUrl}
            caption={this.state.caption}
            toggleModal={this.toggleModal}/>)
          : null }
        <div id="tiles" className='cf'>
          {this.renderSquares()}
        </div>
      </div>
    );
  }
}

export default Gallery;
