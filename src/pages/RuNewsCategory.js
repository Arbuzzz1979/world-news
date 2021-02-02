import React from "react";
import { useSelector } from "react-redux";
//Styled
import { NewsSection } from "../style/Style";
//Animations
import { topNewsAnimation } from "../animations/pageAnimation";

const RuNewsCategory = () => {
  const section = useSelector((state) => state.app.section);
  return (
    <NewsSection
      exit="exit"
      variants={topNewsAnimation}
      initial="hidden"
      animate="show"
    >
      RuNewsCategory : {section}
    </NewsSection>
  );
};

export default RuNewsCategory;
