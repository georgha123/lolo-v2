import React from "react";

export const Card = ({ item, index, handleClick }) => {
  return (
    <>
      <article
        key={index}
        className="card"
        style={{ borderColor: "#" + item.feedColor }}
      >
        {item.content.media && (
          <img
            src={item.content.media}
            className="img"
            onClick={() => handleClick(item.content.link)}
          />
        )}
        <div className="text">
          <h3 onClick={() => handleClick(item.content.link)}>
            {item.content.title}
          </h3>
          <p onClick={() => handleClick(item.content.link)}>
            {item.content.description}
          </p>
        </div>
      </article>
    </>
  );
};
