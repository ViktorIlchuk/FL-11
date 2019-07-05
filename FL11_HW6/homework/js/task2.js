
let sideA = parseInt(prompt('Enter  the side length A'), 10);
let sideB = parseInt(prompt('Enter  the side length B'), 10);
let sideC = parseInt(prompt('Enter  the side length C'), 10);

if(sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA){
    console.log('Triangle doesn’t exist');
} else if(sideA === sideB && sideA === sideC){
    console.log('Eequivalent triangle');
} else if(sideA === sideB || sideA === sideC || sideB === sideC){
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}