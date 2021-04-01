
import { fetchCategories, fetchProductsByCategory } from '../modules/categoryModule.js'
import { displayCard } from '../components/product.js'
import { clear } from '../components/clearData.js'
import { showSpinner, hideSpinner } from './loader.js';

const categoriesDropDown = document.getElementById("categoryDropDown");


categoriesDropDown.addEventListener("change", (e) => {
    displayProductsByCategory(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
    displayCategories();
});

const displayCategories = () => {
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
    showSpinner();
    fetchProductsByCategory(option).then((data) => {
        clear();
        if (data) {
            displayCard(data);
        }
        hideSpinner();
    })
}

