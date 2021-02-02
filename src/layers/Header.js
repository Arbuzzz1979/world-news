import React from "react";
import { useEffect } from "react";
//Components
import NavLang from "../components/NavLang";
import Nav from "../components/Nav";
//StyleComponents
import styled from 'styled-components'
//ReactRouter
import { Link, useLocation } from "react-router-dom";
//Redux
import { initLanguage, changeSection } from "../redux/actions";
import { useDispatch } from "react-redux";

const Header = () => {
  //Location
  const location = useLocation();
  const currentPath = location.pathname.split("/");
  const currentLng = currentPath[1] ? currentPath[1] : "us";
  const currentSection = currentPath[2] ? currentPath[2] : "";

  console.log("currentPath", currentPath);
  console.log("currentLng", currentLng);
  console.log("currentSection", currentSection);
  //Dispatch Location
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initLanguage(currentLng));
    dispatch(changeSection(currentSection));
  }, [currentLng, currentSection, dispatch]);

  return (
    <StyleHeader>
      <NavLang />
      <Nav />
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  grid-column: center-start / center-end;
`;

export default Header;
