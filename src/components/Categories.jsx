import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiCupcake, GiNoodles } from 'react-icons/gi';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Search from './Search';

function Categories() {
  return (
    <div className=" flex flex-col gap-4 md:flex-row items-center justify-evenly p-4 px-[8%]">
      <div className="logo">
        <a href="/" className="flex items-center">
          <img
            src="/assets/cookinc.png"
            className="h-12 mr-3 md:h-14"
            alt="Cook Inc."
          />
          {/* <span className="self-center text-xl font-semibold text-clrPrimaryDark whitespace-nowrap">
            Cook Inc.
          </span> */}
        </a>
      </div>
      <div className="flex justify-center gap-12 p-4 mx-auto rounded-md shadow-md shadow-clrPrimaryDark icons">
        <NavLink to={'/meal/pizza'}>
          <div className="p-3 rounded-full cursor-pointer bg-clrPrimary">
            <FaPizzaSlice className="text-2xl text-clrSecondary" />
          </div>
        </NavLink>

        <NavLink className="cursor-pointer" to={'/meal/sandwiches'}>
          <div className="p-3 rounded-full cursor-pointer bg-clrPrimary">
            <FaHamburger className="text-2xl text-clrSecondary" />
          </div>
        </NavLink>

        <NavLink className="cursor-pointer" to={'/meal/dessert'}>
          <div className="p-3 rounded-full cursor-pointer bg-clrPrimary">
            <GiCupcake className="text-2xl text-clrSecondary" />
          </div>
        </NavLink>

        <NavLink className="cursor-pointer" to={'/meal/homemade'}>
          <div className="p-3 rounded-full cursor-pointer bg-clrPrimary">
            <GiNoodles className="text-2xl text-clrSecondary" />
          </div>
        </NavLink>
      </div>
      <Search />
    </div>
  );
}

export default Categories;
