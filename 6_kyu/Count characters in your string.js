/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {
    let result = {};
    const arr = string.split("");
    for(i = 0; i < arr.length; i++) {
        if(!result[arr[i]]) {
            result[arr[i]] = 0;
        }  {
            result[arr[i]]++;
        }
    }
    return result; 
}
console.log(count("teststring"));