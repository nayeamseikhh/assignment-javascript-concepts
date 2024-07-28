let hight = 75;
let brick = 0;
if ( hight<=10){
    brick = hight *15;
}
else if (hight <=20){
    let firstPart = 10*15;
    let remining = hight - 10;
    let secondPart = remining * 12;
    brick = firstPart + secondPart;
}
else{
    let firstPart = 10*15;
    let secondPart = 10*12;
    let remining = hight - 20;
    let thirdPart = remining* 10;
    brick = firstPart + secondPart + thirdPart;
}

console.log(brick);