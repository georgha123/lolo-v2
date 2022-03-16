import React, { useState, useEffect } from "react";
import Mercury from '@postlight/mercury-parser';
import './ItemModal.css';
import { render } from "@testing-library/react";

function ItemModal( { itemUrl, modalShow, setModalShow } ){
    const [data, setData] = useState([])
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const showHideModal = modalShow ? "modal-container display-block" : "modal-container display-none";
    
    useEffect(()=> {
        
        Mercury.parse("https://cors-anywhere.herokuapp.com/" + itemUrl)
        .then(result => {
                setData(result)
        })

    }, [itemUrl])


    return(
        <div class={ showHideModal } >
            <div class="modal-content">
                <div class="modal-header"> 
                    <h2>{data.title}</h2>
                    <p> author: {data.author}</p>
                </div>
                <div class="modal-body" dangerouslySetInnerHTML={{__html: data.content}}/>
            </div>
            <button type="button" onClick={handleClose}>
                Close
            </button>

      </div>
    )
}

export default ItemModal