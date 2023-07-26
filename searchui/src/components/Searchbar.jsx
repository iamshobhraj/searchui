import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './styles/Searchbar.css';

const Searchbar = () => {
    const [input, setInput] = useState("");
    return <div className='imput'>
        <input placeholder="Type to search..." value={input} onChange={(e) => setInput(e.target.value)}></input>        
        <FaSearch id='searchicon' />
    </div>;
}

export default Searchbar;
