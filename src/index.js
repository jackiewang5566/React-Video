import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// Youtube API key: AIzaSyAM8-lc4kJQHwsACnbFNFAUjQ22Ld4-Wro
const API_KEY = 'AIzaSyAM8-lc4kJQHwsACnbFNFAUjQ22Ld4-Wro';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));