
import { fetchProducts, fetchProductsBySearchParam, fetchProductsByPagination } from '../modules/productModule.js'
import { clear } from './clearData.js';
import { showSpinner, hideSpinner } from './loader.js';
import { displayPaginationElements } from './pagination.js';


const cards = document.getElementById("cards");
const templateCard = document.getElementById("template-card").content;
const searchInput = document.getElementById("search-input");
const liElements = document.getElementById("nav-pagination");
const allSubmit = document.getElementById("all-submit");

const fragment = document.createDocumentFragment();


document.addEventListener("DOMContentLoaded", () => {
    
    displayProducts();
    
    
});

allSubmit.addEventListener("click", (e) => {
    clear();
    displayProducts();
});

liElements.addEventListener("click", (e) => {
    const paginaSeleccionada = e.target.innerText;
    displayProductsByPagination(paginaSeleccionada);
});

searchInput.addEventListener("change", (e) => {
    const query = searchInput.value;
    displayProductsBySearchParam(query);
});

const displayProducts = (data) => {
    showSpinner();
    fetchProducts().then( (data) => {
        if(data){
            displayCard(data);
            displayPaginationElements(data); 
        }
        hideSpinner();
        
    })
}

const displayProductsBySearchParam = (query) => {
    showSpinner();
    fetchProductsBySearchParam(query).then( (data) => {
        clear();
        if(data){
            displayCard(data);
        }
        hideSpinner();  
    })
}

const displayProductsByPagination = (page) => {
    showSpinner();
    fetchProductsByPagination(page).then( (data) => {
        clear();
        if(data){
            displayCard(data);
        }
        hideSpinner();
    })
}




export const displayCard = (data) => {
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