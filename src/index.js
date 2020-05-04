import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/main.styl';
import BookCard from './components/BookCard';

const books = {}

ReactDOM.render(<BookCard />, document.querySelector('main'));
