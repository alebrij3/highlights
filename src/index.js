import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/main.styl';
import BookCard from './components/BookCard';

const initialState = {
  "books": [
    {
      "id" : 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "Format": "audiobook",
      "cover": "url",
    },
    {
      "id" : 2,
      "title": "El triunfo de las ciudades",
      "author": "Edward Glaeser",
      "Format": "paperback",
      "cover": "url",
    },
    {
      "id" : 3,
      "title": "Flourish",
      "author": "Martin E. P. Seligman",
      "Format": "audiobook",
      "cover": "url",
    },
    {
      "id" : 4,
      "title": "Shoe Dog",
      "author": "Phil Knight",
      "Format": "audiobook",
      "cover": "url",
    },
    {
      "id" : 5,
      "title": "Learning How to Learn",
      "author": "Barbara Oakley",
      "Format": "ebook",
      "cover": "url",
    },
  ]
}

ReactDOM.render(<BookCard />, document.querySelector('main'));
