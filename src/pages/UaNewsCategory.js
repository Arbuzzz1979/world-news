import React from "react";
//ReactRouter
import {useHistory} from 'react-router-dom'

const UaNewsCategory = () => {
  //Url retrieval
  const history = useHistory();
  const url = history.location.pathname.substr(4) ;

  return <div className="">UaNewsCategory : {url}</div>;
};

export default UaNewsCategory;
