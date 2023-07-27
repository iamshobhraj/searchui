import React, {useRef, useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './styles/Searchbar.css';


const Searchbar = ({handlesearch}) => {
    const [value, setValue] = useState('');

    const inputchange = (e) => {
        setValue(e.target.value)
        handlesearch(e.target.value)
    }
    
    return <div className='imput'>
        <input placeholder="Type to search..." value={value} onChange={inputchange}></input>        
        <FaSearch id='searchicon' />
    </div>;
}

export default Searchbar;
