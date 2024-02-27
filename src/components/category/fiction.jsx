import React from 'react';
import '../styles.css';
import Book from './book';
import DaVinciCodeImage from '../../images/DaVinciCode.png';
import Fiction2 from '../../images/Fiction2.png';
import Fiction3 from '../../images/Fiction3.png';
import Fiction4 from '../../images/Fiction4.png';
import Fiction5 from '../../images/Fiction5.png';

export const books = [
    {
      id: 1,
      image: DaVinciCodeImage,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      price: 100,
    },
    {
      id: 2,
        image: Fiction2,
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        price: 100,
    },
    {
      id: 3,
        image: Fiction3,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        price: 100,
    },
    {
      id: 4,
        image: Fiction4,
        title: 'Harry Potter Part1',
        author: 'J.K Rowling',
        price: 200,
    },
    {
        id: 5,
        image: Fiction5,
        title: 'The Left Hand',
        author: 'Ursula',
        price: 100,
    },
];
const Fiction = () => {
    return (
        <div className='category'>
           <div className='category-header'><h4>Fiction</h4></div>
            <div className='genre'>
                <div className='cards'>
                {books.map((book) => (
            <Book
              key={book.id}
              data={book}
            />
          ))}
                </div>
            </div>
        </div>
    );
};

export default Fiction;