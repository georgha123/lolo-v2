import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { fetchFeed } from "../utils/apiClient";
import { mapFeedData } from "../utils/mapper";
import "./Feed.css";
import { ManageFeeds } from "./ManageFeeds";
import FeedDisplay from "./FeedDisplay";

function Feed() {
  const mainFeed = process.env.REACT_APP_INITIAL_URL;
  const [items, setItems] = useState([]);
  const [modalUrl, setModalUrl] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (localStorage.getItem("rssItems") === null) {
      fetchFeed(mainFeed)
        .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => {
          let items = data.querySelectorAll("item");
          let color = Math.floor(Math.random() * 16777215).toString(16);
          let info = mapFeedData(items, mainFeed, color);

          info.sort((a, b) => b.content.pubDate - a.content.pubDate);
          setItems(info);
          localStorage.setItem("rssItems", JSON.stringify(info));
        });
    } else {
      setItems(JSON.parse(localStorage.getItem("rssItems")));
    }
  }, []);

  return (
    <div className="centered">
      <div className="feed-header">
        <ManageFeeds items={items} setItems={setItems} />
        <input
          input="text"
          className="category-filter"
          id="categoryFilter"
          placeholder="Category filter"
          onChange={() =>
            setCategory(document.getElementById("categoryFilter").value)
          }
        />
      </div>
      <FeedDisplay
        items={items}
        category={category}
        setModalUrl={setModalUrl}
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
      <Modal
        itemUrl={modalUrl}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  );
}

export default Feed;
