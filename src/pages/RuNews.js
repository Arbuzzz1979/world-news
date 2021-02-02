import React from "react";
//Styled
import styled from "styled-components";
import { NewsSection } from "../style/Style";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/pageAnimation";

const RuNews = () => {
  return (
    <NewsSection
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      ruNews
    </NewsSection>
  );
};

export default RuNews;
