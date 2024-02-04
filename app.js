console.log("Let's get this party started!");
const searchInput = document.querySelector("#searchInput");
const form = document.querySelector("#gif-form");
const results = document.querySelector(".Results");
const removeBtn = document.querySelector("#removeBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const api_key = "m6JZPUdjoQZmvNzmdolmGPS2zd2Oddga";
  const tag = searchInput.value;
  const rating = "g";
  getURL(api_key, tag, rating);
  searchInput.value = '';
});

async function getURL(api_key, tag, rating) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/random", {
    params: { api_key, tag, rating },
  });
  const url = res.data.data.images.original.url;
  appendImg(url, tag);
}

function appendImg(url, tag) {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", tag);
  results.append(img);
}

removeBtn.addEventListener('click', function() {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
})
