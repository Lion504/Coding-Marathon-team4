import React, { useState } from "react";
import "./BookCollectionManager.css"
import "./Book.jsx"

function BookCollectionManager() {
  const [books, setCollection] = useState([]);

  // Add a new book to the list
  function addBook(book) {
    let newBook = new createBook(title, author, genre, language, edition, pages, rating)
    if (newBook) {
      setCollection((b) => [...b, { ...newBook }]);
      setTitle("");
      setAuthor(""); // Clear the input fields
      setGenre("");
      setLanguage("");
      setEdition("");
      setPages("");
      setRating("");
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  //Search book by title
  function searchBook (title) {
    const searchedBook = books.find((book, i) => book.title === title);
    return {...searchedBook};
  }


  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="title"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="author"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="genre"
          placeholder="Enter book genre..."
          value={genre}
          onChange={handleGenreChange}
        />
        <input
          type="language"
          placeholder="Enter book language..."
          value={language}
          onChange={handleLanguageChange}
        />
        <input
          type="edition"
          placeholder="Enter book edition..."
          value={edition}
          onChange={handleEditionChange}
        />
        <input
          type="pages"
          placeholder="Enter book page quantity..."
          value={pages}
          onChange={handlePagesChange}
        />
        <input
          type="rating"
          placeholder="Enter book rating..."
          value={rating}
          onChange={handleRatingChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
