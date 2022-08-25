import fetch from "node-fetch";
fetch("./upload1.json")
  .then(response => response.json())
  .then(json => console.log(json));