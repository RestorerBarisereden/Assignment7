let side1 = 3;
let side2 = 3;
let side3 = 3;
if (side1<=0 || side2<=0 || side3<=0){
    console.log("Invalid sides. It must be greater than zero");
}
else if (side1===side2 && side2===side3){
    console.log("Equilateral Triangle");
}
else if (side1 === side2 || side1 === side3 || side2 === side3){
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}