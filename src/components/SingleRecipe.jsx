import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SingleRecipe(props) {
  const pop = props.pop;
  // const image = props.image;

  return (
    <div className="py-8">
      <Link to={'/recipe/' + pop.id}>
        <div className="max-w-xs mx-8 rounded-lg">
          <img className="rounded-lg" src={pop.image} alt="" />
          <div className="flex flex-row justify-between px-5 pt-4">
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Time: {pop.readyInMinutes} min
          </p> */}

            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Servings: {pop.servings}
          </p> */}
          </div>
          <div className="px-4 pb-2">
            {/* <a href="#"> */}
            <h5 className="h-full mb-2 text-lg font-semibold tracking-tight text-center text-clrSecondary">
              {pop.title}
            </h5>
            {/* </a> */}

            {/* <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </a> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

// const Neumorphism = styled.div`
//   // border-radius: 50px;
//   background: #e0e0e0;
//   box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #a48d4b;
// `;

export default SingleRecipe;
