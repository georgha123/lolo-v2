# Lolo v2 Website Exercise

This is a website excercise, that displays different RSS feeds.

## Live example

[Heroku](https://lolov2.herokuapp.com/)

## Functionality

- Initial feed fetched and displayed
- Add feeds with RSS feed url-s and remove them from being displayed
- All feed items are sorted by date (newest first)
- Clicking on a feed item displays the full article linked to the item
- Filter feed items by typing in a category name
- Feeds are saved into browser localstorage

## Running the app in development mode 

To run it locally install all dependencies in the application folder
``` 
npm install 
```
To change the applications inital fetched feed to your .env file and change the following line:
``` 
REACT_APP_INITIAL_URL = your_websites_initial_rssfeed_url
```
After installing the dependencies
``` 
npm start
```