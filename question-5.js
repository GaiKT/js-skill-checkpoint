// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(arrayCart) {
  // เริ่มเขียนโค้ดตรงนี้
  return arrayCart.reduce((input, currentinput) => input + (currentinput.price * currentinput.quantity) , 0)
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
