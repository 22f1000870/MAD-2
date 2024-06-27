/* Abstract:
*
* Write method definitions to manage Cafe.
*
* Product defines a product with its name, price and number of items in stock
* A cafe is initialized with an array of products, array of instances of CustomerProducts class, and balance amount
* A customer with a customer_id can buy things if it's available in the Cafe.
*
* The stock should be reduced based on the buy request
* Cafe balance amount should be updated
* Customer history is maintained
*
* A customer with a customer_id can return things if he/she has bought before
*
* Check in the customer_products, if he/she has bought before
* If yes, reduce or remove accordingly
* Increase the stock
* Update the balance
*/

/*
 * buyProduct makes a purchase in the cafe, and does the following:
 * 1. Reduces the stock of a product based on the buy request
 * 2. Updates the cafe balance based on the buy request
 * 3. Creates and add the CustomerProducts instance to the customer_products of Cafe class
 *
 * @param {number} customer_id - unique ID of customer
 * @param {object} product - object of Product class
 * @param {number} count - number of items (quantity) to be purchased
 * @return {boolean} 
 *
 * The method should return true if the purchase is successful, and false in the following cases:
 * 1. Product is not available in Cafe
 * 2. The quantity to be puchased is more than the current stock of a product
*/

/*
 * returnProduct makes a return of a purchase in the cafe, and does the following:
 * 1. Updates the stock of a particular product based on the return request
 * 2. Updates the cafe balance based on the return request
 * 3. Updates or deletes the CustomerProducts instance to the customer_products of Cafe class (delete in case of a full return)
 *
 * @param {number} customer_id - unique ID of customer
 * @param {object} product - object of Product class
 * @param {number} count - number of items (quantity) to be returned
 * @return {boolean} 
 *
 * The method should return true if the return is successful, and false in the following cases:
 * 1. No such purchase was made from the Cafe
 * 2. The quantity to be returned is more than the quantity purchased
*/

/*
 * getCurrentBalance return the current balance of the Cafe
*/


class Product {
 
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  
  }
  
  class CustomerProducts {
  
    constructor(customer_id, product, count) {
      this.customer_id = customer_id;
      this.product = product;
      this.count = count;
    }
  
  }
  
  class Cafe {
  
    constructor(products, balance) {
      this.products = products;
      this.balance = balance;
      //Maintain the customer history
      this.customer_products = [];
    }
  
      buyProduct(customer_id, product, count){
          
        const productName=product.name;
        const productPrice=product.price;

        let a= this.products.find((product)=>product.name===productName && product.price ===productPrice);
        
        if (a){
          if(a.stock >= count) {
            a.stock -=count;
            this.balance += productPrice * count;

            let history= new CustomerProducts(customer_id,product,count)
            this.customer_products.push(history);

          } else {
            return false;
          }
        } else {
          return false;
        }
  
    }
  
  
    returnProduct(customer_id, product, count){

        let a =this.customer_products.find((history)=>history.customer_id===customer_id && history.product.name===product.name && history.product.price===product.price )
        let index =this.customer_products.findIndex((history)=>history.customer_id===customer_id && history.product.name===product.name && history.product.price===product.price )

        if (a) {
          if (a.count < count){
            return false;
          } else {
            let a = this.products.find((e)=>e.name=product.name && e.price===product.price)
            a.stock+=count;
            this.balance-=(count * product.price);

            if(a.count>count){
              a.count-=count;
            }
            else if (a.count===count){
              this.customer_products.splice(index,1);
            }
            return true;
          }

        } else {
          return false;
        }

    }
  
  
    getCurrentBalance(){
        return this.balance;
  
    }
  
  }