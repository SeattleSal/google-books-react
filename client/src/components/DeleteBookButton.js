import React from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/API';

function DeleteBookButton({id, savedBooks, getSavedBooks, setSavedBooks, ...props}) {

    // call api Delete book, pass it book to Delete
    const DeleteBook = () => {

        API.deleteSavedBook(id)
        .then(() => { 
            const newBooks = savedBooks.filter(b => b._id !== id );
            setSavedBooks(newBooks);
            // handle successful response
            console.log("Deleted Success!")
        })
        .catch((err) => {
            console.log("Delete Book Err: " + err.response)
        });
    }

    return (
        <Button onClick={DeleteBook} {...props}>
            Delete Book
        </Button>
    )
}

export default DeleteBookButton;
