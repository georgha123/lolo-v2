import { parseText } from "./parseText";

export const mapFeedData = (items, url, color) =>
  [...items].map((x) => ({
    rssFeed: url,
    feedColor: color,
    content: {
      title: parseText(x.querySelector("title").innerHTML),
      link: x.querySelector("link").innerHTML,
      pubDate: Date.parse(x.querySelector("pubDate").innerHTML),
      description: parseText(x.querySelector("description").innerHTML),
      source: x.querySelector("source")?.innerHTML,
      category: Array.from(x.querySelectorAll("category"))?.map(
        (y) => y.innerHTML
      ),
      author: x.querySelector("author")?.innerHTML,
      media: x.lastElementChild.attributes[0]?.nodeValue,
    },
  }));
