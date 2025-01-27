import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, setimages] = useState([]);
  const [loading, setIsLoading] = useState( true )

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);

    return{
        images:images,
        loading:loading
    }

}
