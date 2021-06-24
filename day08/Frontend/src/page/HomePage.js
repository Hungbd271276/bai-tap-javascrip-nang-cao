import data from '../data.js';
class HomePage {
    render() {
        const {products} = data;
            return `
               <h1>Product</h1>
               <div class = "grid grid-cols-4 gap-4">
               ${products.map((product) => {
                   return `
                   <div>
                     <h2>${product.name}<h2>
                     <img src = "${product.image}"/>
                   </div>
                   `
               }).join("")}
               </div>  
            `
    }
}
export default HomePage;