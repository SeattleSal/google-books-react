import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/API';

function SaveBookButton({book, updateBook}) {

    const [toggle, setToggle] = useState(false);

    const bookResult = {
        imgURL : book.volumeInfo.imageLinks.smallThumbnail,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        link: book.volumeInfo.infoLink
      }

    // call api save book, pass it book to save
    const saveBook = () => {
        setToggle(true);
        console.log("savebookbutton: " + bookResult)
        API.saveBook(bookResult)
        .then((message) => { 
            console.log("Saved Success!")
            console.log(message)
        })
        .catch((err) => {
            console.log("Save Book Err: " + err.response)
        });
    }

    return (
        <Button className="m-1" onClick={saveBook}>
            {toggle ? "Book Saved" : "Save Book"}
        </Button>
    )
}

export default SaveBookButton;
