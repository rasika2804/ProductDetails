const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root12345',
    insecureAuth : true,
    database: 'products'
});

connection.connect((err) => {
    if(err){
        console.log("error while connecting to databse");
        return;
    } 
    console.log('Connection estimated')
});

// connection.end((err) => {

// });
class ProductRepo {
    fetchAllProductDetails(){
        return new Promise(async(resolve, reject) => {
            try {
                connection.query(`select p.prd_name, p.availibility,c.category_name
                from products p
                left join product_category c 
                on p.category_id = c.category_id`, (err, rows) => {
                    if(err) throw err;
                    console.log("Data fetched successfully");
                    console.log(rows);
                    return resolve(rows);
                })
            } catch (error) {
                return reject(error);
            }
        })
    }

    getProductByCategory(category_type) {
        return new Promise(async (resolve, reject) => {
            try {
                connection.query(`select p.prd_name, p.availibility,c.category_name
                from products p
                left join product_category c 
                on p.category_id = c.category_id
                where c.category_name = ?`, [category_type], (err, rows) => {
                    if(err) throw err;
                    console.log("category data successfully fetched");
                    console.log(rows);
                    return resolve(rows);
                })
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        })
    }

    getProductByName(product_name){
        return new Promise(async (resolve, reject) => {
            try {
               connection.query( `select prd_id, prd_name from products where prd_name = ?`, [product_name], (err, result) =>{
                   if(err) throw err;
                   return resolve(result[0].prd_id);
               })
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        })
    }

    getCategoryIdByName(category_name){
        return new Promise(async (resolve, reject) => {
            try {
                connection.query(`select category_id from product_category where category_name = ?`, [category_name], (err, rows) => {
                    if(err) throw err;
                    return resolve(rows[0].category_id);
                })
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        })
    }

    updateProductByAvailibility(availibility, product_name) {
        return new Promise(async (resolve, reject) => {
            try {
                const product_id = await this.getProductByName(product_name);
                connection.query(`update products set availibility = ? where prd_id = ?`, [availibility,product_id], (err, result) => {
                    if(!err){
                        return resolve("Product availability updated successfully...");
                    } else {
                        return reject(error);
                    }
                })
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        })
    }

    addNewProductByCategory(category_name, availability, product_name){
        return new Promise(async (resolve, reject) => {
            try {
                const category_id = await this.getCategoryIdByName(category_name);
                connection.query(`insert into products(category_id, prd_name, availibility) values(?,?,?)`,[category_id, product_name, availability], (err, result) => {
                    if(!err){
                        return resolve("New Product added successfully...");
                    } else {
                        return reject(err);
                    }
                })
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        })
    }

    deleteProductDetails(product_name){
        return new Promise(async (resolve, reject) => {
            try {
                const product_id = await this.getProductByName(product_name);
                connection.query(`delete from products where prd_id = ?`, [product_id], (err, result) => {
                    if(!err){
                        return resolve(true);
                    } else {
                        return reject(err)
                    }
                })
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        })
    }
}

module.exports = ProductRepo;