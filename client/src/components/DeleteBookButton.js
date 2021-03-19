import React from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/API';

function DeleteBookButton({book, updateBook}) {

    const testID = "60527a905ad1fa352c2a7296";

    // call api Delete book, pass it book to Delete
    const DeleteBook = () => {

        console.log("Deletebookbutton: " + testID)
        API.deleteSavedBook(testID)
        .then(() => { 
            // handle successful response
            console.log("Deleted Success!")
        })
        .catch((err) => {
            console.log("Delete Book Err: " + err.response)
        });
    }

    return (
        <Button onClick={DeleteBook}>
            Delete Book
        </Button>
    )
}

export default DeleteBookButton;
