import React from "react";
//ReactRouter
import {useHistory} from 'react-router-dom'

const UsNewsCategory = () => {
  //Url retrieval
  const history = useHistory();
  const url = history.location.pathname.substr(4) ;

  return <div className="">UsNewsCategory : {url}</div>;
};

export default UsNewsCategory;
