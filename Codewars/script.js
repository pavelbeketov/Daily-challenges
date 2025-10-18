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


// sum([1, 5, 5, 3, 3]);