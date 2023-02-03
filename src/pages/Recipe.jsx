import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeBtn, setActiveBtn] = useState('instructions');
  let params = useParams();

  const fetchDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=c08996dda62a49faad226b9f993c779d`
    );
    const detailsData = await api.json();
    setDetails(detailsData);
    console.log(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);
  return (
    <div>
      <h2 className="mb-3 text-center text-clrSecondary">{details.title}</h2>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={details.image} className="rounded-md" alt={details.title} />

          <div className="p-3">
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-row justify-evenly">
            <button
              className={
                activeBtn === 'instructions' ? 'active-btn' : 'inactive-btn'
              }
              onClick={() => setActiveBtn('instructions')}
            >
              Instructions
            </button>
            <button
              className={
                activeBtn === 'ingredients' ? 'active-btn' : 'inactive-btn'
              }
              onClick={() => setActiveBtn('ingredients')}
            >
              Ingredients
            </button>
          </div>
          <div className="p-3">
            {activeBtn === 'instructions' && (
              <div>
                <p
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></p>
              </div>
            )}

            {activeBtn === 'ingredients' && (
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.name}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
