///////////////////////////5-8-2024

///////////////Question 1
function reverseArray(arr) {
 
   const reversedArr = [];
   

   for (let i = arr.length - 1; i >= 0; i--) {
       reversedArr.push(arr[i]);
   }
   
   return reversedArr;
}

const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray);
console.log("Original array:", smallArray);
console.log("Reversed array:", reversedSmallArray);


const largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reversedLargeArray = reverseArray(largeArray);
console.log("Original large array:", largeArray);
console.log("Reversed large array:", reversedLargeArray);


///////////////Question 10


const myArray = [10, 20, 30, 40, 50];
const targetItem = 30;

const index = findIndexOfItem(myArray, targetItem);

function findIndexOfItem(array, item) {

   for (let i = 0; i < array.length; i++) {
     
       if (array[i] === item) {
          
           return i;
       }
   }
  
   return -1;
}


if (index !== -1) {
   console.log(`The index of ${targetItem} is ${index}.`);
} else {
   console.log(`${targetItem} is not found in the array.`);
}

/////////////////Question 2


var numbers = [10, -5, 3, -1, 0, 15, -8];
var filterNumber = removeNgtivNmbr(numbers)


function removeNgtivNmbr(array) {
  
   return array.filter(number => number >= 0);
}
console.log(filterNumber);


/////////////////Question 3



function countVowels(str) {
   
   const vowelPattern = /[aeiou]/gi;
   
 
   const matches = str.match(vowelPattern);
   
  
   return matches ? matches.length : 0;
}


const exampleString = "Hello, World!";
const vowelCount = countVowels(exampleString);

console.log(vowelCount); 


/////////////////Question 6


function getMinValueAfterMapping(array, mapFunction) {
   
    const mappedArray = array.map(mapFunction);
    
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}


const value = [4, 1, 7, 3, 9];
const mapFunction = x => x * 2; 

const minValue = getMinValueAfterMapping(value, mapFunction);

console.log(minValue); 



