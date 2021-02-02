import React from "react";
import { useSelector } from "react-redux";
//Styled
import { NewsSection } from "../style/Style";
//Animations
import { topNewsAnimation } from "../animations/pageAnimation";

const UaNewsCategory = () => {
  const section = useSelector((state) => state.app.section);

  return (
    <NewsSection
      exit="exit"
      variants={topNewsAnimation}
      initial="hidden"
      animate="show"
    >
      UaNewsCategory : {section}
    </NewsSection>
  );
};

export default UaNewsCategory;
