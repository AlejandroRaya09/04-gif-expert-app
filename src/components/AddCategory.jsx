import { useState } from "react";

// RECIBE serCategories DE GifExpertApp SIENDO UN HOOK (VARIABLE(EN ESTE CASO ARREGLO) Y FUNCION)
export const AddCategory = ({setCategoriesVar}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    // setInputValue(event.target.value)
    setInputValue(target.value);
  };

  const onSubmit = ( event ) =>{
    event.preventDefault();
    if( inputValue.trim().length <=1) return;
    // EVITA QUE SE AÑADA UN ELEMENTO MENOR O IGUAL A 1 CARACTER

    setCategoriesVar(categories => [inputValue, ...categories]);
    // categories CONTIENE LAS CATEGORIAS YA GUARDADAS Y SE DESTRUCTURAS Y AÑADE EL VALOR DEL INPUT
    setInputValue('')
  }


  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscador de Gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
  
};
