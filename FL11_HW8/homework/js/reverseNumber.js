function reverseNumber(int){
    let intRev = "";
    int += "";
    let start = int < 0 ? 1 : 0;
    let correctAnswer;
    for (let i = start; i < int.length; i++) {
        intRev = int[i] + intRev;
    }
    correctAnswer = int < 0 ? '-' + intRev : intRev;
    return console.log(+correctAnswer);
}
reverseNumber(123); //=> 321
reverseNumber(-456); //=> -654
reverseNumber(10000); //=> 1