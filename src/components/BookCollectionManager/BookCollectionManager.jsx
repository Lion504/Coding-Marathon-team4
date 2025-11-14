import React, { useState } from "react";
import "./BookCollectionManager.css"
import Book from "./Book.jsx"

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  // Handle input change for genre
  function handleGenreChange(event) {
    setGenre(event.target.value);
  }

  // Handle input change for language
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  // Handle input change for edition
  function handleEditionChange(event) {
    setEdition(event.target.value);
  }

  // Handle input change for pages
  function handlePagesChange(event) {
    setPages(event.target.value);
  }

  // Handle input change for rating
  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  //Handle search by title
  function handleSearch() {
    const results = searchBook(searchTitle);

    if (results.length > 0) {
      setSearchResult(results);
    } else {
      setSearchResult([]);
    }
  }

  //Handle book creation
  function createBook () {
    const newBook = {title, author, genre, language, edition, pages, rating};
    return newBook;
  }

  // Add a new book to the list
  function addBook(book) {
    const newBook = createBook()
    //Check if the title is not empty
    if (!newBook.title.trim()) {
      return;
    }
    //Add new book to collection
    else{
      setBooks((b) => [...b, { ...newBook }]);

      // Clear the input fields
      setTitle("");
      setAuthor("");
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
    const lowerTitle = title.toLowerCase();

    const searchedBook = books.filter((book) => book.title.toLowerCase().includes(lowerTitle));
    return searchedBook;
  }


  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Enter book genre..."
          value={genre}
          onChange={handleGenreChange}
        />
        <input
          type="text"
          placeholder="Enter book language..."
          value={language}
          onChange={handleLanguageChange}
        />
        <input
          type="text"
          placeholder="Enter book edition..."
          value={edition}
          onChange={handleEditionChange}
        />
        <input
          type="number"
          placeholder="Enter book page quantity..."
          value={pages}
          onChange={handlePagesChange}
        />
        <input
          type="number"
          placeholder="Enter book rating..."
          value={rating}
          onChange={handleRatingChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search book by title..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {Array.isArray(searchResult) && searchResult.length > 0 && (
      <div className="search-result">
      <strong>Found {searchResult.length} book(s):</strong>
        <ul>
        {searchResult.map((book, index) => (
        <li key={index}>
          {book.title} by {book.author}
        </li>
        ))}
        </ul>
      </div>
      )}

      {Array.isArray(searchResult) && searchResult.length === 0 && (
      <div className="search-result not-found">
        No book found with that title.
      </div>
      )}

      <ol>
        {books.map((book, index) => (
        <Book
          key={index}
          book={book}
          onDelete={() => deleteBook(index)}
        />
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
