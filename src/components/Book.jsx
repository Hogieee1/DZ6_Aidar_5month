import React from 'react';

const Book = ({ book, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Автор: {book.author}</p>
      <p>Жанр: {book.genre}</p>
      <p>Год: {book.year}</p>
      <p>{book.description}</p>
      <button onClick={() => onEdit(book)}>Edit</button>
      <button onClick={() => onDelete(book)}>Delete</button>
    </div>
  );
};

export default Book;
