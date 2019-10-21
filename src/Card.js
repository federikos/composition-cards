import React from 'react';

const Img = ({img}) => img ? <img src={img} className="card-img-top" alt="Card" /> : null;

export default function Card(props) {
  return (
    <div className="card text-left m-4" style={{width: '18rem'}}>
      <Img img={props.img} />
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}