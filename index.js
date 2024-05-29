//1.1
function computeAreaOfARectangle(length, width){
    return length * width;
 }
 var output = computeAreaOfARectangle(4, 8);
 console.log(output);
 
 //1.2
 function computeAreaOfACircle(radius){
    return Math.PI * Math.pow(radius, 2);
 }
 var output = computeAreaOfACircle(4);
 console.log(output);
 
 //1.3
 function computePower(base, exponent){
    return Math.pow(base, exponent);
 }
 var output = computePower(2, 3);
 console.log(output);
 
 //1.4
 function computeSquareRoot(number){
    return Math.sqrt(number);
 }
 var output = computeSquareRoot(9);
 console.log(output);
 
 //1.5
 function getLengthOfThreeWords(word1, word2, word3){
    return word1.length + word2.length + word3.length;
 }
 var output = getLengthOfThreeWords('some', 'other', 'words');
 console.log(output);
 
 //1.6
 function joinArrays(array1, array2) {
    return array1.concat(array2);
 }
 var output = joinArrays([1, 2], [3, 4]);
 console.log(output);
 
 //1.7
 function getProductOfAllElementsAtProperty(obj, key) {
    // Перевірка наявності властивості з вказаним ключем та чи є вона масивом
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0) {
       var product = 1;
       for (var i = 0; i < obj[key].length; i++) {
           product *= obj[key][i];
       }
       return product;
       //return obj[key].reduce((acc, val) => acc * val);
    } else {
        return 0;
    }
 }
 var obj = {
    key: [1, 2, 3, 4]
 }
 var output = getProductOfAllElementsAtProperty(obj, 'key');
 console.log(output);
 
 //1.8
 function sumDigits(number) {
 
    const numberAsString = Math.abs(number).toString();
    let sum = 0;
 
    sum += parseInt(numberAsString[0]) * (number < 0 ? -1 : 1);
 
    for (let i = 1; i < numberAsString.length; i++) {
        sum += parseInt(numberAsString[i]);
    }
    return sum;
 }
 var output = sumDigits(1148);
 console.log(output);
 
 var output = sumDigits(-316);
 console.log(output);
 
 //1.9
 function findShortestWordAmongMixedElements(arr) {
    let shortestWord = '';
 
    if (arr.length > 0) {
       const words = arr.filter(element => typeof element === 'string');
 
       shortestWord = words[0];
 
       for (let i = 1; i < words.length; i++) {
          if (words[i].length < shortestWord.length) {
                shortestWord = words[i];
          }
       }
    }
    return shortestWord;
 }
 
 var output = findShortestWordAmongMixedElements([4, 'two', 2, "three"]);
 console.log(output);
 
 //1.10
 function findSmallestNumberAmongMixedElements(arr){
    let shortestNumber = '';
    const number = arr.filter(element => typeof element === 'number');
    if (arr.length > 0 && number.length != 0) {
       shortestNumber = number[0];
       for (let i = 1; i < number.length; i++) {
          if (number[i] < shortestNumber) {
                shortestNumber = number[i];
          }
       }
    }  
    return shortestNumber; 
 }
 var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
 console.log(output);
 
 //1.11
 function modulo(dividend, divisor) {
    if (isNaN(dividend) || isNaN(divisor)) {
        return NaN;
    }
 
    if (divisor === 0) {
        return NaN;
    }
 
    if (dividend === 0) {
        return 0;
    }
 
    var sign = Math.sign(dividend);
    var absDividend = Math.abs(dividend);
    var absDivisor = Math.abs(divisor);
 
    while (absDividend >= absDivisor) {
        absDividend -= absDivisor;
    }
 
    var remainder = absDividend * sign;
    return remainder;
 }
 var output = modulo(25, 4);
 console.log(output);
 
 //1.12
 function flipEveryNChars(sentence, number){
    let result = '';
    for(let i = 0; i < sentence.length; i += number){
       let fragment = '';
       for(let j = number - 1; j >= 0; j--){
          const index = i + j;
          if(index < sentence.length){
             fragment += sentence[index];
          }
       }
       result += fragment;
    }
    return result;
 }
 var input = 'a short example';
 var output = flipEveryNChars(input, 5);
 console.log(output);
 
 //1.13
 function detectOutlierValue(numbers){
    const numberArray = numbers.split(' ');
    let evenCount = 0;
    let oddCount = 0;
    let uniqueEven = null;
    let uniqueOdd = null;
 
    for (let i = 1; i <= numberArray.length; i++){
       const num = parseInt(numberArray[i-1]);
       if (num % 2 === 0) {
          evenCount++;
          uniqueEven = i;
       }else{
          oddCount ++;
          uniqueOdd = i;
       }
    }
    
    if(evenCount === 1){
       return uniqueEven;
    }else{
       return uniqueOdd;
    }
 }
 var output1 = detectOutlierValue("2 4 7 8 10");
 var output2 = detectOutlierValue("1 10 1 1");
 console.log(output1, output2);
 
 //1.14
 function findPairForSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]];
            }
        }
    }
 
    return null;
 }
 
 const pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
 console.log(pair); // [4, 5]
 
 //1.15
 function areMirrors(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[str2.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
 }
 const result = areMirrors('hello world', 'orldhello w');
 console.log(result);
 
 //1.16
 function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
 
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];
 
        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
 
    return -1;
 }
 var arr = [1, 3, 16, 22, 31, 33, 34];
 console.log(binarySearch(arr, 31));
 
 //1.17
 function isIsogram(str) {
    str = str.toLowerCase();
 
    const letterCount = {};
 
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        
        if (letterCount[letter]) {
            return false;
        }
        
        letterCount[letter] = true;
    }
    
    return true;
 }
 
 console.log(isIsogram("hello")); // false
 console.log(isIsogram("world")); // true
 
 //1.18
 function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/\s/g, '');
 
    let left = 0;
    let right = cleanWord.length - 1;
 
    while (left < right) {
        if (cleanWord[left] !== cleanWord[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
 }
 
 console.log(isPalindrome("level")); // true
 console.log(isPalindrome("hello")); // false