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



function numberToString(num) {
  console.log(num.toString());
}

 //numberToString(333123324);
 