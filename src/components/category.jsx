import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import DaVinciCodeImage from '../images/DaVinciCode.png';
import Sherlockholmes from '../images/Sherlockholmes.png';
import Junglebook from '../images/Junglebook.png';
import Ncertbook from '../images/NcertBook.png';
import Others from '../images/Others.png';


const categories = [
    {
        id: 'fiction',
        image: DaVinciCodeImage,
        title: 'Fiction',
      },
      {
        id: 'thriller',
        image: Sherlockholmes,
        title: 'Thriller',
      },
      {
        id: 'children',
        image: Junglebook,
        title: 'Children',
      },
      {
        id: 'academic',
        image: Ncertbook,
        title: 'Academic',
      },
      {
        id: 'others',
        image: Others,
        title: 'Others',
      },
]
const Category = () => {
    return (
      <div className='category'>
        <div className='category-header'><h4>Shop by Category</h4></div>
        <div className='genre'>
          <div className='cards'>
            {categories.map((category) => (
              <div className='card1' key={category.id}>
                <Link to={`/${category.id}`}>
                  <img src={category.image} alt={category.title} height={150} />
                </Link>
                <p className="fiction">
                  <Link to={`/${category.id}`} className="no-underline">
                    {category.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Category;
