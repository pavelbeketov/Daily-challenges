 "use strict"
 const logBox = document.getElementById('log');
    const oldLog = console.log;

    console.log = function(...args) {
      oldLog.apply(console, args);
      logBox.value += args.join(' ') + "\n";
      logBox.scrollTop = logBox.scrollHeight;
    };

function clearLogs() {
        document.getElementById('log').value = '';
        console.clear();
    
}

//==================================================================


//==================================================================// day 1 number to string
// function numberToString(num) {
//   console.log(num.toString());
// }

//  numberToString(333123324);
 
//==================================================================//day 1 sum arr                                   
//  function sum (numbers) {
//   let result = 0;
//   let i = 0;
//   while (i <= numbers.length - 1) {
//       result = result + numbers[i];
//       i = i + 1;// i++

//   }


//   return result;
// }

// sum([]);

//or



// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// const x = sum([1, 2 ,2 ,3 ]);
// console.log(x);


// sum([1, 5, 5, 3, 3]);

// function calc() {
//   let x = 213;
//   x = x - 12;
//   x = x * 12342;
//   console.log(x);
// }

// calc();

// console,log(this);

// var summation = function (num) {
//   // Code here
//   let i = 0;
//   let result = 0;
//   while (i <= num) {
//     result = result + i;
//     i++;
//   }
//   return result;
// }

// const x = summation(36);
// console.log(x);



// function past(h, m, s) {
//   let result = s * 1000 + m * 60000 + h * 3600000;
//   return result;
// }

// function past(h) {
//   let result = h * 2134;
//   console.log(result);
// }

// past(0, 0, 0);

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   let average = classPoints.reduce (((a, b) => a + b, 0))/classPoints.length;
//   console.log(average);
// }


// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }


// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);























