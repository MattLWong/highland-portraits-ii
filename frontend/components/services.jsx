import React from 'react';
import {waitForEl, myMap} from '../../js/iframe';

class Services extends React.Component {

  componentDidMount(){
    waitForEl('#map', function() {
      myMap();
    });
  }

  render() {
    return(
      <div className="services-page">
        <div className='artistic-statement'>
          <h4>Hi! Thanks for stopping by.</h4>
          <p>Interested in attending a LinkedIn workshop? <a className="dotted" href="https://goo.gl/q5REbR">Sign up here!</a></p>
          <p>One of the first things people notice about you is your profile picture. </p>
          <p>As a portrait photographer, my objective is to create an unquestionably good image that serves your career or intended purposes. An effective picture conveys <strong>trust</strong>, <strong>mood</strong>, and <strong>confidence</strong> to the viewer. Whether you’re a budding scientist preparing your first talk, or a writer with a debut novel coming out, you’ll definitely need a picture that complements your personality and skills. </p>
          <p>Over the last three years I’ve developed a simple yet clean and elegant style to portraiture that I hope comes across in my work.</p>
          <p>I’m a big fan of <strong>color</strong> (!), and studio photography — along with post-processing — allows me to introduce and control a wide spectrum of grays and chromatic gradients for the perfect backdrop.</p>
          <p>If you’re looking to take your profile to the next level, or just looking for a new picture, you’ve found the right place!</p>
        </div>
        <div className='h-bar-no-padding'>
          <hr/>
        </div>

        <div className='rates-and-packages'>
          <h3>Rates + Packages</h3>
        </div>

        <h5><strong>I. Standard </strong> — An elegant, timeless indoor studio portrait.</h5>

        <p className='small-gray'>40-50 min, 2 outfit changes, indoor process, 2 final digital image downloads. ($175/session)</p>

        <h5><strong>II. Outdoors </strong> — An evening tour through iconic North Berkeley.</h5>

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

      </div>
    )
  }
}

export default Services;
