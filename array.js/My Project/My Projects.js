orderCount = 0;

const takeOrder = (topping1, topping2, topping3, topping4, topping5, topping6) => {
    console.log(`sandwich with ${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5}, ${topping6}`);
    orderCount++;
    console.log(orderCount)
}
takeOrder("hearty italian", "cheese", "cucumber", "peppers", "tuna", "sweet onion", "mayo");

var sandwichs = ["hearty italian", "seeded bread", "flat bread"];
sandwichs.push ("doublecheese");
//Adds a new element ("doublecheese") to sandwichs
