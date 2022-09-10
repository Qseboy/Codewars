
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


//EXAMPLE
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//first solution 
function moveZeros(arr) {
    const result = arr.filter(e => e !== 0);
    let long = arr.length - result.length;
    for(i = 0; i < long; i++) {
        result.push(0);
    }
    return result;
}

//other solution
function moveZeros(arr) {
    return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));



