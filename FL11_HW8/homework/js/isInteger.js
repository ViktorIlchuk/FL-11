
let isInteger = function(num){
    if(num === Math.floor(num)){
        console.log(true);
    } else if (num === Math.ceil(num)){
        console.log(true);
    } else {
        console.log(false);
    }
}

isInteger(5);
isInteger(5.1);


