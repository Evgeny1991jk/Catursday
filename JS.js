const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
const api_key = "aa9e8a31-3a4e-41f3-ada2-cc5b02f1e352"

const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const output = document.querySelector(".output_window");

btn.addEventListener("click", showCat);

function showCat(e) {
  e.preventDefault();
  const inputVal = document.querySelector(".input").value;
  if(!inputVal) {
    output.innerHTML = "Необходимо пожелать котику что-нибудь";
  } else {
    fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  clearResultOutput();
  let imagesData = data;
  imagesData.map(function(imageData) {
    const cat = `
        <div class="cat">
        <h3>Это твой котик дня!</h3>
        <img src=${imageData.url} />
        </div>
        `;
      output.innerHTML += cat;
    });
})
  }
}

function clearResultOutput() {
  output.innerHTML = "";
}

