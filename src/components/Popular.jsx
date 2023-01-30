import { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const checkLS = localStorage.getItem('popular');

    if (checkLS) {
      setPopular(JSON.parse(checkLS));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=8`
      );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="">
      <h2 className="">Popular Recipies</h2>
      {/* <div className="grid gap-8 mx-8 sm:grid-col-1 place-content-center md:grid-cols-4 "> */}
      <div className="">
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '1 rem',
          }}
        >
          {popular.map((pop) => (
            <SplideSlide key={pop.id}>
              <SingleRecipe key={pop.id} pop={pop} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
