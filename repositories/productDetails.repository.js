const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root12345',
    insecureAuth : true,
    database: 'product'
});

connection.connect((err) => {
    if(err){
        console.log("error while connecting to databse");
        return;
    } 
    console.log('Connection estimated')
});

connection.end((err) => {

});
class ProductRepo {
    fetchAllProductDetails(){
        return new Promise(async(resolve, reject) => {
            try {
                const query = ``;
            } catch (error) {
                
            }
        })
    }
}

module.exports = ProductRepo;