import React, { useState, useEffect } from "react";
import ItemModal from "./ItemModal";
import './Item.css';
import Mercury from '@postlight/mercury-parser';

function Item() {

    const [items, setItems] = useState([])
    const [modalUrl, setModalUrl] = useState("")
    const [modalShow, setModalShow] = useState(false)
    
    useEffect(() => {
        const url = "https://cors-anywhere.herokuapp.com/https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss";
        // const url = "https://api.codetabs.com/v1/proxy?quest=https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss";

        async function getData(url) {
            const response = await fetch(url );
            return response.text(); 
        }
      
        getData(url)
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => {
            console.log(data.querySelectorAll("item"));
            let items = data.querySelectorAll("item")
            let colour;
            let info = [...items].map((x) => ({
                title: x.querySelector("title").innerHTML,
                link: x.querySelector("link").innerHTML,
                pubDate: x.querySelector("pubDate").innerHTML,
                description: x.querySelector("description").innerHTML,
                source: x.querySelector("source").innerHTML,
                category: Array.from(x.querySelectorAll("category"))?.map(y => y.innerHTML),
                author: x.querySelector("author").innerHTML,
                media: x.lastElementChild.attributes[0]?.nodeValue
            }))

            setItems(info)

    })

    }, [])
    
    function handleClick( e ) {
        setModalUrl(e)
        setModalShow(!modalShow)

    }

    return(
        <div class="centered">        
            <section class="cards">
                { items.map((item, index) => {
                    return (
                        <article key={ index } class="card">
                            <img src={ item.media } class="img" onClick={ () => (handleClick(item.link)) }/>
                            <div class="text">
                                <h3 onClick={ () => (handleClick(item.link)) }>{ item.title }</h3>
                                <p onClick={ () => (handleClick(item.link)) }>{ item.description }</p>
                            </div>
                            
                        </article>
                    )
                }) }
            
            </section>

            <ItemModal itemUrl={modalUrl} modalShow={modalShow} setModalShow={setModalShow}/>

        </div>
    )
}


export default Item