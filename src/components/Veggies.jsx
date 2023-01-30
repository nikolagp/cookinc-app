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

    if (checkLS) {
      setVeggies(JSON.parse(checkLS));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=6&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem('veggies', JSON.stringify(data.recipes));
      setVeggies(data.recipes);
      console.log(data.recipes);
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
