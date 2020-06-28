import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// FETCH

const SEARCH_QUERY = "Romance";
const SEARCH_URL = "https://openlibrary.org/search.json?q=";
const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

// Potential errors include CORS error (Cross-origin) / permissions error
// TypeError - request http but loaded over https

fetch(API_URL)
  .then(res => res.json()) // .json returns a promise
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
