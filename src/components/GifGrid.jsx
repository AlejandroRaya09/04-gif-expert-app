import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {
            images.map((image) => (
            <GifGridItem key={image.id} 
                             {...image}/>
            ))
        }
      </div>
    </>
  );
};
