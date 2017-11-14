import React from 'react'

class Contact extends React.Component {
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
            <p><a href="http://mattlwong.com">Matt Wong</a> (b. 1990) is a portrait photographer based in Berkeley CA.</p>
            <p className='spacer'>&nbsp;</p>
            <p>He is available for commissions throughout the East Bay, San Francisco, and beyond.</p>
            <p className='spacer'>&nbsp;</p>
            <p className="email">E: matt(at)highlandportraits.com</p>
            <p className='spacer'>&nbsp;</p>
            <p>P: 619-729-1269</p>
          </div>
          <div className='c-info-picture'>
            <img id="self-portrait"
              src="http://res.cloudinary.com/mwong9968/image/upload/v1510648287/highland-admin/_D618751.jpg">
            </img>
          </div>
        </div>
        <div className='h-bar'>
          <hr/>
        </div>
        <div className="c-matt">
          <p className='c-me'>CLIENTS + PUBLISHED WORK:</p>
        </div>
        <div className='h-bar'>
          <hr/>
        </div>
      </div>
    )
  }
}

export default Contact;
