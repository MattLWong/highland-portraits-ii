import React from 'react';

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: {display: 'block', opacity: 0, visibility: "hidden"}};
  }

  componentDidMount() {
    this.props.hideHeader();
  }

  componentWillUnmount() {
    this.props.showHeader();
  }

  handleImageLoaded() {
    this.setState({style: {opacity: 1, visibility: "visible"}});
  }

  render() {
    return(
      <div className='cover-1'>
	      <div className='cover-2' id="cover-2">

          <div className="left-cover-1">
            <div className="left-cover-2">
              <div className='left-cover-3'>
                <img className="left-cover-image-portrait"
                  style={this.state.style}
                  onLoad={this.handleImageLoaded.bind(this)}                   src="http://res.cloudinary.com/daibnz1iz/image/upload/v1534873813/_NIK3392-Edit_reduced_bxkzbh.jpg"/>
              </div>
            </div>
          </div>

          <div className="right-cover-1">
            <div className="right-cover-2-logo">
              <h1>Highland Portraits</h1>
            </div>
            <div className="right-cover-2-body">
              <div className="right-cover-3-title">
                <h1>LinkedIn Workshops</h1>
              </div>
              <div className="right-cover-3-body">
                <p>Thinking about sprucing up your LinkedIn profile? Go professional and save over 50% on headshots <em>that get your foot in the door</em>.&nbsp;</p>
                <p>&nbsp;</p>
                <div className='details'>
                <p>UPCOMING: Saturday, September 15 2018.</p><p>Admission: $95/$125 (Student/Community)</p><p>Backdrop: Raven Black | Gainsborough Grey</p><p>Questions? Contact Matt @&nbsp;985-664-9866 (text only)</p><p>&nbsp;</p><p>&nbsp;</p>
                </div>
              </div>
              <div className="right-cover-3-buttons">
                <div className="right-cover-4">
                  <ul><li >
                    <a onClick={this.props.toggleBookNow}>BOOK NOW</a>

                    <a onClick={this.props.exitCover}>EXPLORE</a>
                  </li></ul>
                </div>
              </div>
            </div>

          </div>

      </div>

	  </div>


    );
  }
}

export default Cover;
