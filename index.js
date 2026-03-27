const iddata = document.getElementById("store");

async function prosdt() {
  try {
    const rsspose = await fetch("cloth.json");
    const data = await rsspose.json();
    console.log(data);

    data.products.forEach((item) => {
      const catds = document.createElement("div");
      catds.classList.add = "card";
      catds.innerHTML = `
        <div class="card">
              <img src="${item.thumbnail}" class="card-img-top" alt="imgde">
              <div class"card-text>


              <p class="title"> Name: ${item.name}</p>
              <p class="brand"> brand: ${item.brand}</p>
              <p class="category"> Category: ${item.category}</p>
              <p> orginalPrice: ${item.originalPrice}</p>

              <h4 class="price"> Prie: ${item.price}</h4>
             

               
       </div>
        </div>
        
        
        
        
        
        `;

      iddata.appendChild(catds);
    });
  } catch (error) {
    console.log(error);
  }
}
prosdt();
