"use strict";
console.log("Let's get this party started!");

/**
 * 1. Function that calls the api,
 *
 * 2. Event listener to submit, get input from form
 * will then fetch response api
 *
 * 3. Function creates image giphys based on response api, append to empty div in html
 *
 * 4. Event listener to remove, remove ALL images.
 */

//Variables
const $imgDiv = $(".giphy-images");
const $giphyInput = $("#giphy__input");
const $giphyForm = $("#giphy__form");

const GIPHY_URL = "http://api.giphy.com/v1/gifs/search";
//?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

let searchPrompt;

/** Takes in search prompt and then append search prompt to the url as query string
 * Return response data from api
 */

async function giphyApi() {
  const res = await axois.get(``);
}

$giphyForm.on("submit", function (e) {
  e.preventDefault();
  searchPrompt = $giphyInput.val();
});
