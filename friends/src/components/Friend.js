import React from 'react';

 export default function Friend(props) {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleDisplayFriend({})}> X </span>
      <div>{props.selected.email}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => props.handleDeleteFriend()}>{`Delete ${
        props.selected.name
      }`}</button>
      <button onClick={() => props.toggleDisplayUpdate()}>{`Update ${
        props.selected.name
      }`}</button>
    </div>
  );
}