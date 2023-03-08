import React from 'react';
import Book from './Book';

function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;
