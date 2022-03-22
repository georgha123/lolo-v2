import React, { useState, useEffect } from "react";

export const RemoveFeed = ({ items, setItems }) => {
  const [feedNames, setFeedNames] = useState([]);

  const removeItems = (list, condition) =>
    list.filter((item) => !(item.rssFeed === condition));

  const feedList = (items) => {
    let feed = items.map((x) => x.rssFeed);
    return new Set(feed);
  };

  const removeFeed = (items, url) => {
    setItems((items) => removeItems(items, url));
    localStorage.setItem("rssItems", JSON.stringify(removeItems(items, url)));
    setFeedNames(feedList(items));
  };

  useEffect(() => {
    setFeedNames(feedList(items));
  }, [items]);

  return (
    <div className="remove-rss">
      <p>Remove feeds:</p>
      <ul className="remove-feed-list">
        {[...feedNames].map((feedUrl, i) => {
          return (
            <li className="remove-feed-url" key={i}>
              {feedUrl}
              <span
                className="remove-feed-button"
                onClick={() => removeFeed(items, feedUrl)}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
