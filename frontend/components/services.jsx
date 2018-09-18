import React from 'react';
import {waitForEl, myMap} from '../../js/iframe';

class Services extends React.Component {

  componentDidMount(){
    document.getElementById('home').classList.remove("active");
    document.getElementById('contact').classList.remove("active");
    document.getElementById("services").classList.add("active");
    waitForEl('#map', function() {
      myMap();
    });
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="services-page">
        <div className='artistic-statement'>
          <h4 className='hi'>Hi! Thanks for stopping by.</h4>
          <p>Interested in attending a LinkedIn workshop? <a className="dotted" href="https://goo.gl/q5REbR">Sign up here!</a></p>
          <p>One of the first things people notice about you is your profile picture. </p>
          <p>As a portrait photographer, my objective is to create an unquestionably strong image that serves your career or intended purposes. An effective picture conveys <strong>trust</strong>, <strong>mood</strong>, and <strong>confidence</strong> to the viewer. Whether you’re a rising scientist preparing your first talk, or a novelist with a new book coming out, you’ll benefit from having a picture that complements your personality and skills. </p>
          <p>Over the last three years I’ve developed a simple yet clean and elegant style to portraiture that I hope comes across in my work.</p>
          <p>I’m a big fan of <strong>color</strong> (!), and studio photography — along with post-processing — allows me to introduce and control a wide spectrum of grays and chromatic gradients for the perfect backdrop.</p>
          <p>If you’re looking to take your profile to the next level, or just looking for a new picture, you’ve found the right place!</p>
        </div>
        <div className='h-bar-no-padding'>
          <hr/>
        </div>

        <div className='rates-and-packages'>
          <h3 className='rates-h3'>Rates + Packages</h3>
        </div>

        <h6><strong>I. Standard </strong> — An elegant, timeless indoor studio portrait.</h6>

        <p className='small-gray'>40-50 min, 2 outfit changes, indoor process, 2 final digital image downloads. ($175/session)</p>

        <h6><strong>II. Outdoors </strong> — An evening tour through iconic North Berkeley.</h6>

        <p className='small-gray'>60-75 min, 2 outfit changes, outdoor process, 3 final digital image downloads. ($250/session)</p>

        <div className='minor-details'>
          <h4>Minor Details</h4>

          <p className='small-gray'><em>All indoor sessions include combined use of natural and artificial lighting, choice of 1-2 backdrops (matte paper or a custom-made 6x7&#39; <a className='abbr' href="http://www.oliphantstudio.com/">Oliphant-styled</a> canvases), shot with fast Nikkor prime lenses (50mm f/1.8, 85mm f/1.8), and access to all low-resolution files. Additional full-resolution edited images will be charged at $75/photo. Extensive editing incurs additional charge as estimated by the photographer. All prices reflect the photographer's time and talent, online gallery for confidential sharing, right to downloading and printing the photos. All prices are subject to change without notice.</em></p>
          <p className='medium-gray'><em>**All prices include CA sales tax. </em></p>
        </div>

        <div id='map'></div>


        <p className='spacer'>&nbsp;</p>
        <div className='h-bar-no-padding'>
          <hr/>
        </div>
        <h3 className='h3-test'>Testimonials</h3>
        <div className='testimonials clearfix'>
          <div className='testimonial'>
            <div className='picture-border'>
              <img src='/img/testimonials/letha.jpg'></img>
            </div>

            <p>"Matt offers a comfortable portrait session with relaxed conversation to photograph you as yourself rather than you in your most awkward pose. His photographs are well-lit and well-composed. You'll have a range of images from which to choose - head shots, speaking 'action' shots, and more. His turn around time is quick and you'll have a good time too."<strong> -Letha C.</strong></p>
          </div>

          <div className='clearfix testimonial'>

            <p>"As he took photos, he had a real conversation with me about my interests (one of which - Classical music - we conveniently happened to share!) and created a friendly atmosphere that made it feel like I was not posing too much. For that reason I feel the portraits he took of me looked natural and even captured my personality in surprising ways."<strong> -Theodora M.</strong></p>
              <div className='picture-border'>
                <img src='/img/testimonials/theodora.jpg'></img>
              </div>
          </div>
          <div className='clearfix testimonial'>
            <div className='picture-border'>
              <img src='/img/testimonials/keith.jpg'></img>
            </div>

            <p>"Matt really likes to get the person relaxed and comfortable in front of the camera; he asks (in a respectful and non-intrusive way) about life goals, passions, dreams. This process, I believe, made the experience and the portraits more intimate and personal -- which is great if you want your pictures to capture the real you! :)"<strong> -Keith W.</strong></p>
          </div>
          <div className='clearfix testimonial'>


            <p>"Matt's strength lies in making you comfortable. He engages you and pays attention to the minor details such as posture and lighting without making it seem so. My afternoon session was incredibly enjoyable and within 20 minutes Matt captured a full range emotions. I went in to capture myself in my natural habitat. Matt's work did that to perfection."<strong> -Mohammad L.</strong></p>
            <div className='picture-border'>
              <img src='/img/testimonials/mohammad.jpg'></img>
            </div>
          </div>
          <div className='clearfix testimonial'>
            <div className='picture-border'>
              <img src='/img/testimonials/jo.jpg'></img>
            </div>

            <p>"As a portrait photographer, Matt strikes the perfect balance between flexible and professional. While he was willing to accommodate all of my random requests, he also made sure to capture the formal/traditional poses and backgrounds. Post-session, I received a lot of follow-up regarding the proofs and photo-editing."<strong> -Jo L.</strong></p>
          </div>
          <div className='clearfix testimonial'>


            <p>"Matthew is such a great photographer! Additionally he has such a warm and welcoming personality he sets his subjects at ease instantly, making getting a great shot a breeze. I am usually very camera shy and Matthew was able to get several great pics of me with a variety of diffferent but very flattering expressions."<strong> -Jai P.</strong></p>
            <div className='picture-border'>
              <img src='/img/testimonials/jai.jpg'></img>
            </div>
          </div>
          <div className='clearfix testimonial'>
            <div className='picture-border'>
              <img src='/img/testimonials/wendy.jpg'></img>
            </div>

            <p>"Matt is awesome! Really fun and interesting to work with! He is open minded and willing to work around your ideas, which is fantastic if you want to put in your own ideas. I'm happy to see all the results! Can't wait to work with him again."<strong> -Wendy Z.</strong></p>
          </div>
          <div className='clearfix testimonial'>


            <p>"Matt did a great job, and I saw for the first time that you can talk and get great pictures. I also got what is maybe the only picture of my Duchenne smile (the genuine smile)."<strong> -Alok S.</strong></p>
              <div className='picture-border'>
                <img src='/img/testimonials/alok.jpg'></img>
              </div>
          </div>
          <div className='clearfix testimonial'>
            <div className='picture-border'>
              <img src='/img/testimonials/karen.jpg'></img>
            </div>

            <p>"Matt Wong is amazing. My boyfriend and I had a photography session with him and it was absolutely amazing. Matt took us to a beautiful site in Northern Berkeley and took priceless photographs of us. I am so excited to refer him to my friends and family. This is definitely a number I am holding on to." <strong> -Karen A.</strong></p>
          </div>
          <div className='clearfix testimonial'>

            <p>"A very interesting and different approach to photo shoots. The idea is to capture you in your most natural states, rather than posing you. Matt will engage you in talking about your passions and interests and then capture you while speaking. He is very good at facilitating the conversation and picking out topics that will catch your natural self."<strong> -Max V.</strong></p>
              <div className='picture-border'>
                <img src='/img/testimonials/max.jpg'></img>
              </div>
          </div>

        </div>
        <div className='h-bar-no-padding'>
          <hr/>
        </div>
        <div className="studio-overview">
          <div>
            <h3>Studio Overview</h3>
            <p>— 300 sq-ft, 7'11 ceiling studio in North Berkeley CA</p>
            <p>— Private, secluded urban location for outdoor sessions</p>
            <p>— Weddings/engagements photography at <a className='abbr' href="http://www.mattwong.photography">Matt L Wong</a></p>
          </div>
          <div className="block">
          <h5>Cameras and Lenses</h5>
            <p>Nikon D610</p>
            <ul>
              <li>— Sigma 35mm f/1.4 Art</li>
              <li>— Voigtlander 40mm f/2.0 Ultron SL II</li>
              <li>— Nikkor AF-S 50mm f/1.8G</li>
              <li>— Nikkor AF-S 85mm f/1.8G*</li>
              <li>— Nikkor AF-S 24-70mm f/2.8G</li>
              <li>— Nikkor AF 70-300mm f/4-5.6G</li>
            </ul>
            <p>Mamiya 7ii</p>
            <ul>
              <li>— Mamiya 80mm f/4</li>
              <li>— Mamiya 43mm f/4.5</li>
            </ul>
            <p>Mamiya 645e</p>
            <ul>
              <li>— 35mm f/3.5</li>
              <li>— 80mm f/2.8</li>
              <li>— 150mm f/3.5</li>
            </ul>
            <p>Toyo View 45E</p>
            <ul>
              <li>— Rodenstock Sironar 180mm f/5.6</li>
            </ul>
          </div>

          <div className="block">
            <h5>Canvas Backdrops</h5>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/grey.jpg" alt="" />
              <div className="backdrop-info">
                <h4>Gainsborough Grey</h4>
                <p>A light, pale grey with extensible shades of darkness, a classic for business portraits. Suitable for headshots, upper-torso portraits. (72x68")</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/cerulean.jpg" />
              <div className="backdrop-info">
                <h4>Cerulean Blue</h4>
                <p>Textured cerulean blue canvas with muted swirls of white. Suitable for headshots and upper-torso portraits. (72x68")</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/midnight.jpg" alt="" />
              <div className="backdrop-info">
                <h4>Midnight Black</h4>
                <p>A full-bodied shade of black. Suitable for headshots, upper-torso, and full-body portraits. (72x110")</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/mauve.jpg" />
              <div className="backdrop-info">
                <h4>Mauve Purple</h4>
                <p>A shade of greyish-violet with wavy white streaks. Suitable for headshots. (52.5x83")</p>
              </div>
            </div>
          </div>
          <div className='block'>
            <h5>Seamless Paper Backdrops</h5>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/canary.jpg"/>
              <div className="backdrop-info">
                <h4>Canary Yellow</h4>
                <p>#38-12. Suitable for headshots, upper-torso, and full-body portraits. (53" width)</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/purple.jpg"/>
              <div className="backdrop-info">
                <h4>Majestic Purple</h4>
                <p>#91-12. Suitable for headshots, upper-torso, and full-body portraits. (53" width)</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/red.jpg"/>
              <div className="backdrop-info">
                <h4>Carnelian Red</h4>
                <p>#08-12. Suitable for headshots, upper-torso, and full-body portraits. (53" width)</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/seafoam.jpg"/>
              <div className="backdrop-info">
                <h4>Sky Blue</h4>
                <p>#02-1253. Suitable for headshots, upper-torso, and full-body portraits. (53" width)</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/white.jpg"/>
              <div className="backdrop-info">
                <h4>Super White</h4>
                <p>#1-12. Suitable for headshots, upper-torso, and full-body portraits. (53" width)</p>
              </div>
            </div>
          </div>
          <div className="block">
            <h5>Other Backdrops</h5>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/other.jpg"/>
              <div className="backdrop-info">
                <h4>Green Screen</h4>
                <p>Excellent choice for .png imagery. Suitable for headshots. (57.5x83")</p>
              </div>

            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/tiedye.jpg"/>
              <div className="backdrop-info">
                <h4>Tie Dye Grey Muslin</h4>
                <p>Greyish-white pleated fabric. Suitable for headshots, upper-torso, and full-body portraits. (6x9')</p>
              </div>
            </div>
            <div className="backdrop clearfix">
              <img src="/img/backdrops/white.jpg"/>
              <div className="backdrop-info">
                <h4>Bleached White Muslin</h4>
                <p>Always available. Suitable for headshots, upper-torso, and full-body portraits. (6x9')</p>
              </div>
            </div>
          </div>

          <div className="block">
            <h5>Lights, Light Modifiers, Stands</h5>
            <p>— Yongnuo YN-560 IV Speedlite (x3)</p>
            <p>— Yongnuo YN-560 TX Wireless Flash Controller (x2)</p>
            <p>— Photek Softlighter II, 46" umbrella with diffuser</p>
            <p>— Westcott 4634 7' Parabolic Umbrella</p>
            <p>— Westcott 2001 43" optical white satin umbrella</p>
            <p>— Savage 7' collapsible light stand</p>
            <p>— Manfrotto 5001B 74" nano stand</p>
            <p>— LumoPro LP605 7' compact light stand</p>
            <p>— ProMaster LS-1 light stand</p>
            <p>— Bogen 3051 tripod</p>
            <p>— Manfrotto 290 tripod</p>
            <p>— Rogue FlashBender 2 10.5x11" reflector</p>
            <p>— Tomtop 24x36 portable light reflector</p>
            <p>— Drive Medical overbed table</p>
            <p>— Ikea Dalfred bar stool</p>
          </div>
        </div>
        <p className='spacer'>&nbsp;</p>
        <div className='h-bar-no-padding'>

        </div>
      </div>
    )
  }
}

export default Services;

// GOES at the top of Component Did Mount
// setTimeout(function() {
//   document.getElementById('banner').style.top = "0px"
// }, 1000)
// window.addEventListener('scroll', function(e) {
//   let y = window.scrollY;
//   if (y > 350) {
//     document.getElementById('banner').style.top = "-51px"
//   } else {
//     document.getElementById('banner').style.top = "0px"
//   }
// })
