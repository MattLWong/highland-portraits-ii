import React from 'react'

import {waitForEl, myMap} from '../../js/iframe';
import {wufoo} from '../../js/wufoo';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.style = {
      fontFamily: "inherit",
      fontSize: "small",
      color:"#a7a7a7",
      textAlign:"center",
      display:"block"
    }
  }

  componentDidMount() {
    // this.startMap();
    waitForEl('#map', function() {
      myMap();
    });
    wufoo();
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
            <p><a href="http://mattlwong.com">Matt Wong</a> (b. 1990) is a portrait photographer based in Berkeley CA specializing in professional and artistic headshots.</p>
            <p className='spacer'>&nbsp;</p>
            <p>He is available for commissions throughout the East Bay, San Francisco, and beyond.</p>
            <p className='spacer'>&nbsp;</p>
            <p className="email">E: <a href="mailto:matt@highlandportraits.com">matt(at)highlandportraits.com</a></p>
            <p className='spacer'>&nbsp;</p>
            <p>P: 985-664-9866</p>
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
      </div>
    )
  }
}

export default Contact;
