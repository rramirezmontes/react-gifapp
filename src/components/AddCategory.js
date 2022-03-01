import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e)=> {
        setinputValue(e.target.value);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        //console.log('Submit hecho')
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setinputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="sb-example-1">
                <div className="search">
                    <input 
                    type="text" 
                    className="searchTerm" placeholder="Searching" 
                    onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
                </div>
            </div>

                {/*<input 
                    type="text"
                    value={inputValue}
                    placeholder="Serching..."
                    onChange={handleInputChange}
                /> */}
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}