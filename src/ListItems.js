import React from "react";
import "./list.css";
import FlipMove from "react-flip-move";

function ListItems(props) {
  const items = props.items;

  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          ></input>
        </p>
        <button
          onClick={() => {
            props.deleteItem(item.key);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
