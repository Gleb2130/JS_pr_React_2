import React, { useEffect, useState } from 'react';
import Header from './Header';
import product from './product';
import { useParams, Link} from 'react-router-dom';
import { dataShopCategories } from "./shopdata";

const Categories = () => {
  const { id } = useParams();
  const [htmlcategory, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${id}`);
        const data = await response.json();
        setCategory(data.map((obj) => product(obj)));
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };
    fetchCategory();
  }, [id]);

  const handleCategoryClick = async (category) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setCategory(data.map((obj) => product(obj)));
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  return (
    <>
      <Header/>
      {dataShopCategories.map((category) => (
        <Link to={`/categories/${category}`}><button>{category}</button>
          
        </Link>
      ))}
      {htmlcategory}
    </>
  );
};

export default Categories;