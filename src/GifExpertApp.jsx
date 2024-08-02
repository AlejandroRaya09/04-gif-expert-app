import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One PunchMan', 'Dragon Ball']) 

  const onAddCategory = (newCategory) =>{

    if( categories.includes(newCategory) ) return;
    
    setCategories(cat => [newCategory,...cat])
    // setCategories(['Valorant',...categories]);
    // setCategories( cat => [...cat, 'Valorant'])
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      
{/* INPUT */}
      {/* SE MANDA LA FUNCION setCategories A AddCategory INCLUYENDO categories SIENDO ESTA EL ARREGLO */}
      {/* <AddCategory setCategoriesVar = { setCategories } /> */}
      <AddCategory onNewCategory={ onAddCategory }/> 
      {/* onNewCategory={(category) => onNewCategory(category)} */}

{/* GRID DE GIFS */}
        { categories.map(category => (
          <GifGrid key={category} 
          category={category} /> )) 
        }

     

    </>
  );


};
