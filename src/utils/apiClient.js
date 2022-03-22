const urlProxy = process.env.REACT_APP_PROXY_URL;

export const fetchFeed = async (feedUrl) => getData(`${urlProxy}${feedUrl}`);

const getData = async (url) => {
  const response = await fetch(url);
  return response.text();
};
