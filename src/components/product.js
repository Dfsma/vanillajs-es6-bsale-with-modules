import { fetchProducts } from '../modules/productModule.js'


const cards = document.getElementById("cards");
const templateCard = document.getElementById("template-card").content;

const fragment = document.createDocumentFragment();


document.addEventListener("DOMContentLoaded", () => {

    displayProducts();
    
    
});

const displayProducts = (data) => {

    fetchProducts().then( (data) => {

        displayCard(data); 
        
    })
}

const displayCard = (data) => {
    data.data.map((producto) => {
    templateCard.querySelector("img").setAttribute("src", producto.url_image);
    templateCard.querySelector("h5").textContent = producto.name;
    templateCard.querySelector("p").textContent =  producto.price;
    templateCard.querySelector("#discount").textContent = producto.discount + " %";
    templateCard.querySelector(".fa-cart-plus").dataset.id = producto.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};