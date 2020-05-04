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
    }
  ]
}

ReactDOM.render(<BookCard />, document.querySelector('main'));
