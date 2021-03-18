
const categoriesUrl = 'https://bsale-test-cl.herokuapp.com/api/v1/categories/';



const fetchCategories = async () => {
    try {
        const response = await fetch(categoriesUrl);
        const data = await response.json();

        if (data) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

const fetchProductsByCategory = async (selectedOption) => {
    try {
        const response = await fetch(categoriesUrl + `${selectedOption}`);
        const data = await response.json();
        
        if (data) {
            return data;
        }
    } catch (error) {
        console.log(error)
    }
}

export { fetchCategories, fetchProductsByCategory };