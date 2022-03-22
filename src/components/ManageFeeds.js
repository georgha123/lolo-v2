import React, { useState } from "react";
import { AddFeed } from "./AddFeed";
import { RemoveFeed } from "./RemoveFeed";
import "./ManageFeeds.css";

export const ManageFeeds = ({ items, setItems }) => {
  const [feedModalShow, setFeedModalShow] = useState(false);
  const [newRSSUrl, setNewRSSUrl] = useState("");
  const handleFeedClose = () => setFeedModalShow(false);
  const handleFeedShow = () => setFeedModalShow(true);
  const showHideModal = feedModalShow
    ? "modal-container display-block"
    : "modal-container display-none";

  return (
    <>
      <button
        type="button"
        className="manage-feed-button"
        onClick={handleFeedShow}
      >
        Manage feeds
      </button>
      <div className={showHideModal}>
        <div className="modal-content">
          <div className="modal-body">
            <AddFeed
              items={items}
              setItems={setItems}
              newRSSUrl={newRSSUrl}
              setNewRSSUrl={setNewRSSUrl}
            />
            <RemoveFeed feedUrl items={items} setItems={setItems} />
          </div>
        </div>
        <button
          type="button"
          className="manage-feed-modal-button"
          onClick={handleFeedClose}
        >
          X
        </button>
      </div>
    </>
  );
};
