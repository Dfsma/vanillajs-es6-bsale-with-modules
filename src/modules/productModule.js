const baseUrl = "https://bsale-test-cl.herokuapp.com/api/v1/";
const productsUrl = 'https://bsale-test-cl.herokuapp.com/api/v1/products/';

const fetchProducts = async () => {
  
  try {
    const response = await fetch(productsUrl);
    const data = await response.json();

    if (data) {
      return data;
    }

  } catch (error) {
    console.log(error);
  }

};

const fetchProductsBySearchParam = async (query) => {
  try {
      const response = await fetch(baseUrl + `searchs?query=${query}`);
      const data = await response.json();
      
      if (data) {
          return data;
      }
  } catch (error) {
      console.log(error)
  }
}


export { fetchProducts, fetchProductsBySearchParam };




