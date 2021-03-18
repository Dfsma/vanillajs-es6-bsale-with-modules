
import { fetchCategories, fetchProductsByCategory } from '../modules/categoryModule.js'
import { displayCard } from '../components/product.js'
import { clear } from '../components/clearData.js'

const categoriesDropDown = document.getElementById("categoryDropDown");


categoriesDropDown.addEventListener("change", (e) => {
    displayProductsByCategory(e.target.value);
  });

document.addEventListener("DOMContentLoaded", () => {

    displayCategories();



});

const displayCategories = (data) => {
    fetchCategories().then((data) => {
        const html = data.data
            .map((categoria) => {
                return `
            <option id="category" value="${categoria.id}">${categoria.name}</option>
        `;
            })
            .join("");
        document
            .querySelector("#categoryDropDown")
            .insertAdjacentHTML("beforeend", html);
    })
}

const displayProductsByCategory = (option) => {
    fetchProductsByCategory(option).then((data) => {
        clear();
        displayCard(data);
    })
}

