
const displayPaginationElements = (data) => {

    const totalPageCount = Math.ceil(data.data.length / 4);
    let numbers = [];
  
    for (let index = 1; index < totalPageCount; index++) {
      numbers.push(index);
    }
    
    const html = numbers
      .map((number) => {
        return `  
          <li  id="page-items" class="page-item" >        
              <a  id="page-links" class="page-link" href="#"  value=${number}>${number}</a>            
          </li>      
          
          `;
      })
      .join("");
    document.querySelector("#pagination").innerHTML = html;
  
};

export { displayPaginationElements };
