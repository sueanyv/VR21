const client_id = "5Mb9vMq1YoupvT3Hl2IPYtzpsAkIY6Ew_rChDgXCERs"; // Create an account unsplash tp hey client ID;
const searchTerm = "cars";
const resource =`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=20&client_id=${client_id}`;

  fetch(resource) 
  .then((res) => res.json())
  .then((data) => {
  const container = document.querySelector(".container")
for (let i = 0; i < data.results.length-1; i++) {
  const url  = data.results[i].urls.thumb;
  const img = document.createElement("img")
  
  img.setAttribute("src", url);
  container.append(img);
}
 
  });