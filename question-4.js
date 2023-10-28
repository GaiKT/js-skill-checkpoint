// Question 4: Shipping Cost Calculator

function calculateShippingCost(totalOrderPrice) {
  // เริ่มเขียนโค้ดที่นี่
  let shippingCost = 0;
  if(totalOrderPrice >= 4000){
    shippingCost = 0;
  }else if(totalOrderPrice >= 2000){
    shippingCost = 250;
  }else{
    shippingCost = 500;
  }
  return shippingCost === 0 ? "Shipping is free.": `Shipping cost is ${shippingCost} Baht.`
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
