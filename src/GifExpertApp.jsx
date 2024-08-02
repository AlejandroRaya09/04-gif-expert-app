import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One PunchMan', 'Dragon Ball']) 

  const onAddCategory = () =>{
    setCategories(['Valorant',...categories]);
    // setCategories( cat => [...cat, 'Valorant'])
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      
      {/* INPUT */}
      {/* SE MANDA LA FUNCION setCategories A AddCategory INCLUYENDO categories SIENDO ESTA EL ARREGLO */}
      <AddCategory setCategoriesVar = { setCategories } />

      <ol>
        { categories.map(category => {
          return <li key={category}> { category } </li>
        }) }
      </ol>

       

    </>
  );


};
