import React, { useState, useEffect } from "react";
import Mercury from "@postlight/mercury-parser";
import "./Modal.css";

export const Modal = ({ itemUrl, modalShow, setModalShow }) => {
  const [data, setData] = useState([]);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const showHideModal = modalShow
    ? "modal-container display-block"
    : "modal-container display-none";

  useEffect(() => {
    let proxy = process.env.REACT_APP_PROXY_URL;
    Mercury.parse(proxy + itemUrl).then((result) => {
      setData(result);
    });
  }, [itemUrl]);

  return (
    <div className={showHideModal}>
      <button type="button" className="modal-button" onClick={handleClose}>
        X
      </button>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{data.title}</h2>
          <p> author: {data.author}</p>
          <a href={itemUrl}>Open website</a>
        </div>
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
};
