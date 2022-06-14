import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
const Abook = () => {
    const [book, setBook] = useState([]);
    const [newbook, setNewBook] = useState([]); 
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/AudioKnigi/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setBook(allPersons); 
            setNewBook(book.slice(book.length-4))
        });
    }, [setBook, setNewBook]);
    console.log(book)
    console.log(newbook)
    return (
        <>{book.map((book)=> 
            <div>
                <Link to={'/book/' + book.url.split('/')[5]}>
                    {book.name}
                    <audio controls>
                        <source src={book.audio_url} />
                    </audio>
                </Link>
            </div>
          
            
            )}
                
            </>
    );
}

export default Abook;