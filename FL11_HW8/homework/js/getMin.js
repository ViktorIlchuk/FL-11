
let getMin = function(a, b, c){
    let correctAnsver;
     if(a < b && b < c){
        correctAnsver = a;
    }else if(b < a && b < c){
        correctAnsver = b;
    }else{
        correctAnsver = c;
    }
    return console.log(correctAnsver);
}

getMin(3, 0, -3); //=> -3