import React from "react";
import '../App.css';

interface ButtonProps {
  getJoke: VoidFunction;
  title: String;
}

const Button: React.FC<ButtonProps> = ({ getJoke, title }): JSX.Element => {
  return (
    <div>
      <button onClick={getJoke} className="btn">Get a joke</button>
    </div>
  );
};

export default Button;
