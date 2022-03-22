import React, { useEffect } from "react";
import { fetchFeed } from "../utils/apiClient";
import { mapFeedData } from "../utils/mapper";

export const AddFeed = ({ items, setItems, newRSSUrl, setNewRSSUrl }) => {
  const sortArray = (array) => {
    array.sort((a, b) => b.content.pubDate - a.content.pubDate);
    return array;
  };

  const setLocalStorage = (array) => {
    localStorage.setItem("rssItems", JSON.stringify(array));
  };

  useEffect(() => {
    const url = newRSSUrl;

    if (newRSSUrl.length >= 1) {
      fetchFeed(url)
        .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => {
          let newItems = data.querySelectorAll("item");
          let color = Math.floor(Math.random() * 16777215).toString(16);
          let info = mapFeedData(newItems, url, color);

          setItems(sortArray([...items, ...info]));
          setLocalStorage(sortArray([...items, ...info]));
          setNewRSSUrl("");
        });
    }
  }, [newRSSUrl]);

  return (
    <div className="new-rss">
      <input
        input="text"
        className="rss-url"
        id="RSSUrl"
        placeholder="feed URL"
      />
      <button
        type="button"
        className="rss-url-button"
        onClick={() => setNewRSSUrl(document.getElementById("RSSUrl").value)}
      >
        Add feed
      </button>
    </div>
  );
};
