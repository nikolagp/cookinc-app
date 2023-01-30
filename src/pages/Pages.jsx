import React from 'react';
import Home from './Home';
import Meal from './Meal';
import Searched from './Searched';
import { Route, Routes } from 'react-router-dom';
import Recipe from './Recipe';

function Pages() {
  return (
    <div className="mx-[15%] my-0 min-h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:type" element={<Meal />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default Pages;
