import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleAddBook = newBook => {
    fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => setBooks([...books, data]));
  };

  const handleDeleteBook = id => {
    fetch(`/books/${id}`, {
      method: 'DELETE'
    }).then(() => setBooks(books.filter(book => book.id !== id)));
  };

  return (
    <div className="App">
      <h1>Book Rental Web</h1>
      <BookList books={books} onDelete={handleDeleteBook} />
      <AddBook onAdd={handleAddBook} />
    </div>
  );
}

export default App;
