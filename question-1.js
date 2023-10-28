// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
function totalPrice(objectInventory) {
  let totalPrice = 0;
  for (let i in objectInventory) {
    totalPrice += objectInventory[i].price * objectInventory[i].quantity
  }
  return `Total inventory value: ${totalPrice} baht`;
}
inventory.apple.price = 100;
inventory.orange = {price: 20 , quantity: 300};

console.log(totalPrice(inventory));

