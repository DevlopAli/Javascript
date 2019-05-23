let orderCount = 0;
const takeOrder = (topping, size) => {
    console.log(`Pizza with base ${topping} and ${size}`);
    orderCount++;
    console.log(orderCount)
}
takeOrder("pineapple", "12 inch");
takeOrder("cheese", "14 inch");
takeOrder("chicken", "18 inch");
