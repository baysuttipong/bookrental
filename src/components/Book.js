import React from 'react';

function Book({ book, onDelete }) {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

export default Book;
