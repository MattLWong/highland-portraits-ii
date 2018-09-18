import React from 'react';

class BookNow extends React.Component {
  render() {

    return(
      <div className="book-now-overlay"
        onClick={this.props.toggleBookNow}>
        <div className="book-now-page">
          <iframe src="https://highlandportraits.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframehighlandportraits"
            frameBorder="0" allowtransparency="true"></iframe>
        </div>
      </div>
    );
  }
}

export default BookNow;
