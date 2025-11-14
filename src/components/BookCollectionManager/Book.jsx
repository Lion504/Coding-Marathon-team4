import React, { useState } from "react";

function Book (props) {
    const { book, onDelete } = props;

    return (
        <li className="book-item">
            <div className="book-info">
                <div className="book-title"><strong>{book.title}</strong> by {book.author}</div>
                <div className="book-details">
                    {" – "}
                    {book.genre}, {book.language}, {book.edition},{" "}
                    {book.pages} pages, rating: {book.rating}
                </div>
            </div>
            <button className="delete-button" onClick={onDelete}>Delete</button>

        </li>
        );
}

export default Book;
