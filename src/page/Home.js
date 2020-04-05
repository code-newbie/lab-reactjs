import React from 'react';
//import '../App.css';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Home page body content</p>
            <p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </p>
            <p>
                <a
                    className="App-link"
                    href="/map" >
                    Open Google Map Page
                </a>
            </p>
        </div>
    );
};

export default Home;