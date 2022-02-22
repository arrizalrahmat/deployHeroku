import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => {
            return <li key={i}>{item.label}</li>;
          })}
        </ul>
      ) : (
        <h1>no item</h1>
      )}
    </div>
  );
};

export default ItemList;
