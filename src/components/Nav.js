import React from "react";
//Constant Lng
import { initApp } from "../constants/initApp";
//StyleComponents
import styled from 'styled-components'
//ReactRouter
import { Link } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";

const Nav = () => {
  const lng = useSelector((state) => state.app.language);

  return (
    <>
      {lng && (
        <StyleNav>
          {initApp[lng].sections.map((section) => {
            return (
              <li key={section.id}>
                <Link to={section.url}>{section.title}</Link>
              </li>
            );
          })}
        </StyleNav>
      )}
    </>
  );
};

const StyleNav = styled.ul`
  display: flex;
  flex:1;
  background-color: #e7e3e3;
  list-style: none;
  justify-content: space-between;
  padding: 0.8rem 0;
  li a{
    font-family: Oswald;
    color: blue;
    text-decoration: none;
    text-transform: capitalize;
  }
`;

export default Nav;
