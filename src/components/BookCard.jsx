import React from 'react';
import '../../assets/styles/book-card.styl';

class BookCard extends React.Component {
  render() {
    return (
      <div>
        <section className="details">
          <h2>Book title</h2>
          <p>Author</p>

        </section>
        <section className="highlights">

        </section>
      </div>
    );
  }
}

export default BookCard;
