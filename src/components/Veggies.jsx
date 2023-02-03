import { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggies() {
  const [veggies, setVeggies] = useState([]);
  // const VITE_APP_API_KEY = process.env.VITE_APP_API_KEY;

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    const checkLS = localStorage.getItem('veggies');

    if (!checkLS) {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=c08996dda62a49faad226b9f993c779d&number=6&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem('veggies', JSON.stringify(data.recipes));
      setVeggies(data.recipes);
      console.log(data.recipes);
    } else {
      setVeggies(JSON.parse(checkLS));
    }
  };

  return (
    <div className="mx-auto">
      <h2 className="">Veggies Recipies</h2>
      <div className="grid gap-4 mx-auto rounded-md grid-col-1 place-content-center md:grid-cols-2 lg:grid-cols-3">
        {veggies.map((pop) => (
          <SingleRecipe key={pop.id} pop={pop} />
        ))}
      </div>
    </div>
  );
}

export default Veggies;
