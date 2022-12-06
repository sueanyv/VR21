document.querySelector("#submit").addEventListener("click", (e) => {

      e.preventDefault();
     const image = document.querySelector('#imgUrl').value;
     const textTop = document.querySelector('#textTop').value;
     const textB = document.querySelector('#textB').value;
    
    debugger;
   const contentCard = `
   <div class="col-md-3">
      <div class="card">
       <h3>${textTop}</h3>
       <img src=${image}>
       <h3>${textB}</h3>
      </div>
   </div>
   `

 document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
});