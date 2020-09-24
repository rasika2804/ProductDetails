const ProductBiz = require('../biz/productDetails.biz');
const productDetails = new ProductBiz();
class ProductContoller {
    getProductDetailsByCategory(request, response){
        try {
            
            //const result = productDetails.
        } catch (error) {
            
        }
        response.send({
            result : "success",
            message : "api run successfully"
        })
    }
}

module.exports = ProductContoller;