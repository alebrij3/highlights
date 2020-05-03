import React from 'react';
import '../../assets/styles/book-card.styl';
import bookCover from '../../assets/img/portadas/el-triunfo-de-las-ciudades.jpg';

class BookCard extends React.Component {
  render() {
    return (
      <>
      <div className="book-card">
        <img src={bookCover} alt=""/>
        <section className="details">
          <h2>De cero a uno</h2>
          <p className='author'>Peter Thiel</p>
          <p>Editorial: Beek</p>
          <p className='dates'><span>Inicio: 20/04/2020</span><br /><span>Final: 24/04/2020</span></p>
          <p>Etiquetas:</p>
          <ul className='tags'>
            <li>empresas</li>
            <li>startups</li>
            <li>tecnología</li>
          </ul>
        </section>
      </div>
      <div className="book-card">
        <img src={bookCover} alt=""/>
        <section className="details">
          <h2>El triunfo de las ciudades</h2>
          <p className='author'>Edward Glaeser</p>
          <p>Editorial: Taurus</p>
          <p className='dates'><span>Inicio: 07/01/2020</span><br /><span>Final: 02/04/2020</span></p>
          <p>Etiquetas:</p>
          <ul className='tags'>
            <li>ciudades</li>
            <li>desarrollo urbano</li>
            <li>globalización</li>
            <li>urbanismo</li>
            <li>economía</li>
          </ul>
        </section>
      </div>
      </>
    );
  }
}

export default BookCard;
