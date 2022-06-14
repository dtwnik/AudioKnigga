import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../component/Header';
import Background from '../component/Background';
const BookPage = () => {
    const { id } = useParams()
    const [appState, setAppState] = useState();
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/AudioKnigi/' + id;
        axios.get(apiUrl).then((resp) => {
          const allPersons = resp.data;
          setAppState(allPersons);
        });
      }, [setAppState]);
    return (
        <>
        <Header/>
        <Background/>
        {appState && 
            <div>
                <div>{appState.name}</div>
                {/* <div>{appState.audio_url}</div> */}
                <audio controls>
                    <source src={appState.audio_url}/>
                    <p></p>
                </audio>
                <div>{appState.author}</div>
            </div>
        }
        </>
    );
}

export default BookPage;