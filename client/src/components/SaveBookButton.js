import React from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/API';

function SaveBookButton({book, updateBook}) {

    const bookResult = {
        imgURL : book.volumeInfo.imageLinks.smallThumbnail,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description
      }

    // call api save book, pass it book to save
    const saveBook = () => {

        console.log("savebookbutton: " + bookResult)
        API.saveBook(bookResult)
        .then((message) => { 
            // handle successful response
            // change saved property to true?
            // how to get book id??
            console.log("Saved Success!")
            console.log(message)
        })
        .catch((err) => {
            console.log("Save Book Err: " + err.response)
        });
    }

    return (
        <Button onClick={saveBook}>
            Save Book
        </Button>
    )
}

export default SaveBookButton;
