import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json")
        .then(res => res.json())
        .then(data => {
            setAllBooks(data);
        })
    }, []);
    return (
        <div>
            <h1 className='text-center playfair text-3xl md:text-[40px] font-bold mb-5 md:mb-9'>Books</h1>
        </div>
    );
};

export default Books;