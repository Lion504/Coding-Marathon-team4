import React, { useState } from "react";

function Book () {

    const [book, setBook] = useState({})
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [edition, setEdition] = useState("");
    const [pages, setPages] = useState("");
    const [rating, setRating] = useState("");

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

    //Handle book creation
    function createBook () {
        const newBook = {title, author, genre, language, edition, pages, rating};
        return setBook (newBook);
    }
}

export default Book;
