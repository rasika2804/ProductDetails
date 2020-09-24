const ProductRepo = require('../repositories/productDetails.repository');
const productRepo = new ProductRepo();

class ProductDetailsBiz {
    getProductDetails() {
        return new Promise(async(resolve, reject) => {
            try {
                //const result = productRepo.getAllProductDetails();
                console.log("testing mysql");
            } catch (error) {
                console.log(error);
            }
        })
    }
}

module.exports = ProductDetailsBiz;