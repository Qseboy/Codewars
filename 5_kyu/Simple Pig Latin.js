/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// RETURN
// function pigIt(str){
//     let a = str.replace(/ay/g, "").split(" ");
//     for(i = 0; i < a.length; i++) {
//         a[i] = a[i].slice(-1) + a[i].substr(0, a[i].length -1);
//     }
//     return a.join(' ')
// }


function pigIt(str){
    const result = str.split(' ').map((e) => {
        return e.slice(1) + e.charAt(0) + 'ay';
    })
    return result.join(' ');
}

