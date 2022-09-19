

function calculate1RM(w, r){
    if(r === 1) return Math.round(w);
       else if (r === 0) return 0;
    
    //Epley
    let a = w * (1 + r / 30);
    console.log("a = ", a);

    //McGlothin
    let b = 100 * w / 101.3 - 2.67123 * r;
    console.log("b = ", b);

    //Lombardi
    let c = w * Math.pow(r, 0.1);
    console.log("c = ", c);
    
    let arr = [a, b, c];
    let max = 0;
    arr.forEach((e) => {
        if(e > max) max = e;
    })
    return Math.round(max);
   // the 1RM as specified in the description, or w if r == 1, or null if r == 0
  }


  console.log(calculate1RM(80 , 2))