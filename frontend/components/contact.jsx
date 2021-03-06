import React from 'react';

import {wufoo} from '../../js/wufoo';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
      fontFamily: "inherit",
      fontSize: "small",
      color:"#a7a7a7",
      textAlign:"center",
      display:"block"
    };
  }

  componentDidMount() {
    wufoo();
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="contact-page">
        <div className='h-bar'>
          <hr/>
        </div>
        <div className="c-matt">
          <p className='c-me'>CONTACT MATT:</p>
        </div>
        <div className='h-bar'>
          <hr/>
        </div>
        <div className='c-info clearfix'>
          <div className='c-info-left'>
            <div className='c-info-picture'>
              <img id="self-portrait"
                src="http://res.cloudinary.com/mwong9968/image/upload/v1510648287/highland-admin/_D618751.jpg">
              </img>
            </div>
            <p><a href="http://mattwong.co">Matt Wong</a> (b. 1990) is a portrait photographer based in Berkeley CA specializing in professional and artistic headshots.</p>
            <p className='spacer'>&nbsp;</p>
            <p>He is available for commissions throughout the East Bay, San Francisco, and beyond.</p>
            <p className='spacer'>&nbsp;</p>
            <p className="email">E: <a href="mailto:highlandportraits@gmail.com">matt(at)highlandportraits.com</a></p>
            <p className='spacer'>&nbsp;</p>
            <p>P: 985-664-9866 (Text)</p>
            <p className='spacer'>&nbsp;</p>
            <p>Client List: Kleinfelder Engineering Corporation, UC Berkeley Graduate Student Body, UC Berkeley Faculty, Sonoma State University Faculty, Boston Consulting Group, UC Davis GSM</p>
          </div>
        </div>
        <div className='h-bar'>
          <hr/>
        </div>
        <div className="c-matt">
          <p className='c-me'>GET IN TOUCH:</p>
        </div>
        <div className='h-bar'>
          <hr/>
        </div>
        <div id="wufoo-ze82gxh0y1akbl">
        Fill out my <a href="https://mwong9968.wufoo.com/forms/ze82gxh0y1akbl">online form</a>.
        </div>
        <div id="wuf-adv" style={this.style}>Use <a href="http://www.wufoo.com/gallery/templates/">Wufoo templates</a> to make your own HTML forms.</div>
        <p className='spacer'>&nbsp;</p>
          <div className='h-bar'>
            <hr/>
          </div>
        <div className='c-info-left'><p className='website-by'>Website designed by <a href="http://mattwong.co">Harbinger Design</a> &copy; 2018</p></div>
      </div>
    );
  }
}

export default Contact;
