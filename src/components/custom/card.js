import React from "react";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <div className="card-text">
        <h5>{props.header}</h5>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
