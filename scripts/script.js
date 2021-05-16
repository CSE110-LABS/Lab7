// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
let count = 0;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        count++;
        newPost.id = count;
        newPost.addEventListener('click', () => {
          setState({name: 'entry', id: newPost.id});
        });
        document.querySelector('main').appendChild(newPost);
      });
    });
});


var homePage = document.querySelector('header h1');
var settingsPage = document.querySelector('header img');

homePage.addEventListener("click", () => {
  setState({name: "homeState"}, false)
});

settingsPage.addEventListener("click", () => {
  setState({name: "settingsState"}, false);
});

window.addEventListener('popstate', (event) => {
  setState(event.state, true);
});



