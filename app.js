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
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

/** Takes in search prompt and then append search prompt to the url as query string
 * Return response data from api
 */
async function giphyApi(searchPrompt) {
  const res = await axios.get(GIPHY_URL, { params: { q: searchPrompt, api_key: API_KEY } });
  let imgURL= res.data.data[0].images.original.url;
  return imgURL;
}

/** Input an embedded URL and creates img element in DOM, then append.*/
function makeIMG(url) {
  const $img = $("<img>").attr("src",url);
  $imgDiv.append($img);
}

/** Capturing the form submission input and running the API based on input. */
$giphyForm.on("submit", submitEvent);

async function submitEvent(e){
    e.preventDefault();
    const searchPrompt = $giphyInput.val();
    let URL = await giphyApi(searchPrompt);// put await here to make sure code waits before executing next line
    makeIMG(URL);
}

/** Make event listener to remove all images stored in $imgDiv */
$("#giphy__remove").on("click", removeIMG);

function removeIMG(){
  $imgDiv.empty();
  console.log("remove button has been clicked")
}
