const ProductRepo = require('../repositories/productDetails.repository');
const productRepo = new ProductRepo();

class ProductDetailsBiz {
    getProductDetails() {
        return new Promise(async(resolve, reject) => {
            try {
                const result = await productRepo.fetchAllProductDetails();
                return resolve(result);
            } catch (error) {
                console.log(error);
            }
        })
    }

    getProductCategoryDetails() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await productRepo.getProductByCategory();
                return resolve(JSON.parse(JSON.stringify(result)));
            } catch (error) {
                return reject(error);
            }
        })
    }

    updateProductByAvailibility(availibility, product_name){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await productRepo.updateProductByAvailibility(availibility, product_name);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }

    addNewProductByCategory(category_name, availability, product_name){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await productRepo.addNewProductByCategory(category_name, availability, product_name);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }

    deleteProductDetails(product_name){
        return new Promise(async (resolve, reject) =>{
            try {
                const result = await productRepo.deleteProductDetails(product_name);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }

    getCategoryDetails(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await productRepo.getCategoryDetails();
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }
    
    updateCategoryByName(new_category_name, old_category_name){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await productRepo.updateCategoryByName(new_category_name, old_category_name);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }

    addNewCategory(category_name){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await productRepo.addNewCategory(category_name);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

module.exports = ProductDetailsBiz;