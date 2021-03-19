import React, {useEffect, useState} from 'react';
import SavedBooksList from '../components/SavedBooksList'
import API from '../utils/API'

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getSavedBooks()
        .then(({data}) => {
            // set state
            console.log("Saved books..." + data)
            setSavedBooks(data);
        });
    }, [setSavedBooks]);

    console.log(savedBooks)

    return (
        <div>
            <SavedBooksList savedBooks={savedBooks}/>
        </div>
    )
}

export default Saved
