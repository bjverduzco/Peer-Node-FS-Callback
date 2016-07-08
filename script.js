var fs = require('fs');

function readFile(callback){
  fs.readFile('numbers.txt', 'utf-8', callback);
}

function getMeMyNumbas(err, fileContents){
  var highestNum = 0;
  var lowestNum = 100000000000;
  var total = 0;
  var average = 0;
  // var largeNumArray = [];
  console.time('numberFunction');
  var numArray = fileContents.split(', ');
  var arrayLength = numArray.length;
  // console.log(fileContents);
  // console.log(numArray.length); 500
  // console.log(numArray);
  for(var i = 0; i < arrayLength; i++){
//way 1
//this way had decent speed

    // if(numArray[i].length <= 1 || numArray[i].length >= 3){
    //   numArray[i] = parseInt(numArray[i]);
    //   if(lowestNum > numArray[i]){
    //     lowestNum = numArray[i];
    //   }else if(highestNum < numArray[i]){
    //     highestNum = numArray[i];
    //   }
    // } else {
    //   numArray[i] = parseInt(numArray[i]);
    // }

//way 2
//this turned out to be slower

    // if(numArray[i].length >= 3){
    //   numArray[i] = parseInt(numArray[i]);
    //   total += numArray[i];
    //   largeNumArray.push(numArray.splice[i, 1]);
    //   i--;
    // }
    // else {
    //   numArray[i] = parseInt(numArray[i]);
    //   total += numArray[i];
    // }

//way 3
//I've decided that I am overthinking this and that simple is best, on to way 4...

    // if(numArray[i].length >= 3){
    //   numArray[i] = parseInt(numArray[i]);
    //   total += numArray[i];
    //   if(highestNum < numArray[i]){
    //     highestNum = numArray[i];
    //   }
    // }
    // else if(numArray[i].length <= 1){
    //   numArray[i] = parseInt(numArray[i]);
    //   total += numArray[i];
    //   if(lowestNum > numArray[i]){
    //     lowestNum = numArray[i];
    //   }
    // }
    // else {
    //   numArray[i] = parseInt(numArray[i]);
    //   total += numArray[i];
    // }

//way 4

    numArray[i] = parseInt(numArray[i]);
    total += numArray[i];
    if(lowestNum > numArray[i]){
      lowestNum = numArray[i];
    }
    else if(highestNum < numArray[i]){
      highestNum = numArray[i];
    }

  }

//way 2 cont.

  // numArray.sort();
  // largeNumArray.sort();
  // lowestNum = numArray.shift();
  // highestNum = largeNumArray.pop();

  average = total / arrayLength;
  average = Math.round(average);
  console.timeEnd('numberFunction');
  done(highestNum, lowestNum, average);
}

function done(highestNum, lowestNum, average){
  console.log('The highest number is: ' + highestNum + '\nThe lowest number is: ' + lowestNum + '\nThe average is: ' + average);
}

readFile(getMeMyNumbas);
