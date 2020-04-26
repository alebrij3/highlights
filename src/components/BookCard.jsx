import React from 'react';
import '../../assets/styles/book-card.styl';
import bookCover from '../../assets/img/portadas/el-triunfo-de-las-ciudades.jpg';

class BookCard extends React.Component {
  render() {
    return (
      <div className="book-card">
        <section className="details">
          <h2>El triunfo de las ciudades</h2>
          <p>Edward Glaeser</p>
          <p>Taurus</p>
          <p><span>Inicio: 07/01/2020</span><br /><span>Final: 02/04/2020</span></p>
          <ul>
            <li>ciudades</li>
            <li>desarrollo urbano</li>
            <li>globalización</li>
            <li>urbanismo</li>
            <li>economía</li>
          </ul>
        </section>
        <section className="highlights">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste neque at tempora a sed magnam earum molestias ipsam explicabo dicta placeat sint nostrum odio exercitationem laudantium, odit fugit itaque!Iusto similique unde consequatur? Mollitia ea tempore est excepturi nihil maiores consequatur facere obcaecati iure! Nihil, nesciunt sunt! Ratione voluptatibus delectus quis. Nobis dolores sapiente laborum aspernatur! Doloribus, ipsa laboriosam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae vel aut voluptas dicta tenetur aspernatur numquam, maxime aperiam quia? Quasi cupiditate deleniti doloribus sapiente placeat, facere pariatur vero nobis.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam obcaecati suscipit quae qui, itaque cumque dolore debitis tenetur magnam dolor error fugiat rem illum voluptas, architecto quisquam distinctio consequuntur?</li>
          </ul>
        </section>
        <img src={bookCover} alt=""/>
      </div>
    );
  }
}

export default BookCard;
