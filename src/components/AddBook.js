import React, { useState } from 'react';

function AddBook({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      description
    };
    onAdd(newBook);
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <div className="add-book">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBook;
