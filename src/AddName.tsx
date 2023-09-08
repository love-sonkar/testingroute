import React, { useRef } from "react";
import "./styles/addname.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";

const AddName: React.FC = () => {
  const inputref = useRef<HTMLInputElement | null>(null);
  const navigate: NavigateFunction = useNavigate();

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputref.current?.value;
    if (value) {
      navigate(value);
    } else {
      alert("please enter somthing");
    }
  };

  return (
    <div className="addname">
      <h1>Add Your Name Here</h1>
      <form onSubmit={handlesubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Type Your name here"
          className="input"
          ref={inputref}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default AddName;
