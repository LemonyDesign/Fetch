import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// BASIC FETCH
// Potential errors include CORS error (Cross-origin) / permissions error
// TypeError - request http but loaded over https

// FETCH
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://alligator.io/js/fetch-api/

fetch("FETCH_URL")
  .then(res => res.json()) // .json() returns a promise
  .then(data => data)
  .catch(err => err);

// using async ... await
// fetch() and json() return promises, so just use await keyword
// try { const res = await fetch(url) } catch (e) { **_handle Error here_** }

// IFFE immediately invoked function expression / self-invoking arrow function
// wrap and scope code that automatically runs

(async () => {
  try {
    const SEARCH_QUERY = "javascript";
    const SEARCH_URL = "https://openlibrary.org/search.json?q=";
    const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

    const res = await fetch(API_URL);
    const data = await res.json();
    const titles = data.docs.map(doc => doc.title);
    console.log(titles);
  } catch (error) {
    console.error("Error message: ", error.message);
  }
})();

// GET
const USERAPI_URL = "https://jsonplaceholder.typicode.com/users";
const getUsers = async url => {
  try {
    const res = await fetch(url);
    let data = await res.json();
    data = data.map(user => user.username);
    console.log(data);
  } catch (error) {
    console.error("Error message: ", error);
  }
};

console.log(getUsers(USERAPI_URL));

// Or... return promise from aync/await and chain .then calls
async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}

fetchUsers(USERAPI_URL).then(data => {
  console.log(data.map(user => user.username));
});

// POST or 'PUT'
// const userData = { username: "example" };

// const postUser = async data => {
//   const settings = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   try {
//     const res = await fetch("endpoint", settings);
//     const responseData = await res.json();
//     console.log(responseData);
//   } catch (error) {
//     console.error("Error message: ", error);
//   }
// };

// console.log(postUser(userData));
