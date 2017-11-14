import React from 'react';
import Gallery from './gallery';
import Header from './header';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return(
      <div className="wrapper">
        <Header/>
        <main id="main">
          <Gallery/>
        </main>
      </div>
    )
  }
}

export default Wrapper;
