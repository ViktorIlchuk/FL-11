
// Task 0

function getNumbers(str) {
    let newArr = [];
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
      if(isFinite(arr[i])){
        newArr.push(+arr[i]);
      }
    }  
    return console.log(newArr);
}

// Task 1

  function findTypes(){
    let arg = arguments;
    let object = {};
    for(let i = 0; i < arg.length; i++){
      let type = typeof arg[i];
      object[type] = object[type] !== undefined ? object[type] : 0;
      object[type] += 1;
    }
    return console.log(object);
  }

// Task 2

function executeforEach(arr, func){
    for (let i = 0; i < arr.length; i++) {
      func(arr[i]);
    }  
  }
 
// Task 3

function mapArray(arr, funcMap){
    let newArr = [];
    executeforEach(arr, function(el){
        newArr.push(funcMap(el));
    });
    return console.log(newArr);
}

// Task 4

function filterArray(arr, funcFilter){
    let newArr = [];
    executeforEach(arr, function(el){
        if(funcFilter(el)){
            newArr.push(el);
        }        
    });
    return console.log(newArr);
}

// Task 5

function showFormattedDate(date){
    const months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
      }
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const day = date.getDate();
    const yeare = date.getFullYear();
    return console.log(`Date: ${monthName} ${day} ${yeare}`);
}

// Task 6

function canConvertToDate(date){
    let newDate = new Date(date);
    if (Object.prototype.toString.call(newDate) === '[object Date]') {
        if (isNaN(newDate.getTime())) {
            console.log(false);
        } else {
            console.log(true);
        }
      }
}

// Task 7
const miliSecPerDay = 86400000;
function daysBetween(firstDate, secondDate){
    let d1 = Math.floor(Date.parse(firstDate) / miliSecPerDay);
    let d2 = Math.floor(Date.parse(secondDate) / miliSecPerDay);
    return d2 - d1;
}
// Task 8

const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]

  function getAmountOfAdultPeople(data) {
    const currentDate = new Date();
    const daysOnYeare = 365;
    const adultEge = 18;
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
        let ageToday = daysBetween(data[i][' birthday '], currentDate) / daysOnYeare;
        if (ageToday > adultEge) {
            counter += 1;
        }
    }
    return console.log(counter);
}
getAmountOfAdultPeople(data)
// Task 9

function keys(obj){
    let keys = [];
    for(let i in obj) {
        keys.push(i);
    }
    return console.log(keys)
}

// Task 10

function values(obj){
    let values = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            values.push(obj[i]);
        }
    }
    return console.log(values);
}