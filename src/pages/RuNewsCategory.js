import React from "react";
//ReactRouter
import {useHistory} from 'react-router-dom'

const RuNewsCategory = () => {
  //Url retrieval
  const history = useHistory();
  const url = history.location.pathname.substr(4) ;

  return <div className="">RuNewsCategory : {url}</div>;
};

export default RuNewsCategory;
