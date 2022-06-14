import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
const NewBook = () => {
    const [newbook, setNewBook] = useState([]);  
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/AudioKnigi/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setNewBook(allPersons.slice(allPersons.length-4))
        });
    }, [setNewBook]);
    console.log(newbook)
    return (
        <>
            <section className="movies" id="new">
                <h2 className="heading">Новинки</h2>
                <div className="movies-container">
                    {newbook.map((book) =>
                        <div key={book.id}>
                            <div className="box">
                                <BookCard data={book} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default NewBook;