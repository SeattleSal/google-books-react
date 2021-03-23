import React, {useEffect, useState} from 'react';
import SavedBooksList from '../components/SavedBooksList'
import API from '../utils/API'

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    const getSavedBooks = () => {
        return API.getSavedBooks()
        .then(({data}) => {
            setSavedBooks(data);
        });
    }

    useEffect(() => {
        getSavedBooks();
    }, [setSavedBooks]);

    return (
        <div>
            <SavedBooksList savedBooks={savedBooks}
            getSavedBooks={getSavedBooks}
            setSavedBooks={setSavedBooks}/>
        </div>
    )
}

export default Saved
