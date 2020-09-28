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
    async getProductByCategory(request, response, next){
        try {
            const page = parseInt(request.query.page);
            const limit = parseInt(request.query.limit);

            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const result = await productDetails.getProductCategoryDetails();

            //pagination for products 
            const finalResult = {};

            finalResult.next = {
                page : page + 1,
                limit : limit
            }

            finalResult.privious = {
                page : page - 1,
                limit : limit
            }
            if(result.length > 0){
                finalResult.paginatedResult = result.slice(startIndex, endIndex);
                response.send({
                    message : "Products details fetched by Category successfully",
                    finalResult
                })
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Update Product by category
    async updateProductAvailibility(request, response){
        try {
            const availibility = request.body.availability;
            const product_name = request.body.product_name;
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

    //add new Product
    async addProductByCategory(request, response){
        try {
            const category_name = request.body.category_name;
            const availibility = request.body.availability;
            const product_name = request.body.product_name;
            const result = await productDetails.addNewProductByCategory(category_name, availibility, product_name);
            console.log(result);
            response.send({
                result
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProduct(request, response){
        try {
            const product_name = request.params.product_name;
            const result = await productDetails.deleteProductDetails(product_name);
            if(result){
                response.send({
                    message: "product details deleted successfully"
                })
            } else {
                response.send({
                    message: "Something went wrong"
                })
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllCategoryDetails(request, response){
        try {
            const result = await productDetails.getCategoryDetails();
            response.send({
                message : "api run successfully",
                result
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateCategoryName(request, response){
        try {
            const new_category_name = request.body.new_category_name;
            const old_category_name = request.body.old_category_name;
            const result = await productDetails.updateCategoryByName(new_category_name, old_category_name);
            console.log(result);
            response.send({
               result
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async addNewCategory(request, response){
        try {
            const category_name = request.body.category_name;
            const result = await productDetails.addNewCategory(category_name);
            console.log(result);
            response.send({
                result
            });
        } catch (error) {
            
        }
    }
}

module.exports = ProductContoller;