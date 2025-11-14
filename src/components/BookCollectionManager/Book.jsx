import React, { useState } from "react";

function Book () {

    return (
        <li>
        <strong>{book.title}</strong> by {book.author}
            {" – "}
            {book.genre}, {book.language}, {book.edition},{" "}
            {book.pages} pages, rating: {book.rating}
            <button onClick={onDelete}>Delete</button>
        </li>
        );


}

export default Book;
