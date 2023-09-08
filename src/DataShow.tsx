import React from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/datashow.scss";

type ParamType = {
  param: string;
};

const DataShow: React.FC = () => {
  const { param } = useParams<ParamType>();

  const username: string | undefined =
    param && param[0]?.toUpperCase() + param.slice(1, param.length);

  return (
    <div className="datashow">
      <h1 className="heading_name">{username}</h1>
      <h2 className="animate">{username} ki taraf se..</h2>
      <h3>Happy Krishna Janmastami</h3>
      <Link to="/">want your click here</Link>
    </div>
  );
};

export default DataShow;
