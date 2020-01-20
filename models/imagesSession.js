module.exports = function Image(cart) {
    this.items = cart.items || {};


    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item};
        }
 
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};