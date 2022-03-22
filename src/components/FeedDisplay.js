import React from "react";
import { Card } from "./Card";

function FeedDisplay({
  items,
  category,
  setModalUrl,
  setModalShow,
  modalShow,
}) {
  const dataToShow = category
    ? items.filter((item) =>
        item.content.category
          .toString()
          .toLowerCase()
          .includes(category.toString().toLowerCase())
      )
    : items;

  function handleClick(e) {
    setModalUrl(e);
    setModalShow(!modalShow);
  }

  return (
    <section className="cards">
      {dataToShow.map((item, index) => (
        <Card item={item} index={index} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default FeedDisplay;
