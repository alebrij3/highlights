import React from 'react';
import '../../assets/styles/book-card.styl';
import bookCover from '../../assets/img/portadas/el-triunfo-de-las-ciudades.jpg';

class BookCard extends React.Component {
  render() {
    return (
      <div className="book-card">
        <section className="details">
          <h2>Book title</h2>
          <p>Author</p>

        </section>
        <section className="highlights">

        </section>
        <img src={bookCover} alt=""/>
      </div>
    );
  }
}

export default BookCard;
