const ProductBiz = require('../biz/productDetails.biz');
const productDetails = new ProductBiz();
class ProductContoller {
    //Get all the Product Details.
    async getAllProductDetails(request, response){
        try {
            const result = await productDetails.getProductDetails();
            console.log("final result", result);
            response.send({
                message : "api run successfully",
                result
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Get all the Products by Category
    async getProductByCategory(request, response){
        try {
            let category_type = request.params.category;
            const result = await productDetails.getProductCategoryDetails(category_type);
            console.log(result);
            response.send({
                message : "Products details fetched by Category successfully",
                result
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Update Product by category
    async updateProductAvailibility(request, response){
        try {
            let availibility = request.body.availability;
            let product_name = request.body.product_name;
            const result = await productDetails.updateProductByAvailibility(availibility, product_name);
            console.log(result);
            response.send({
               result
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProductContoller;