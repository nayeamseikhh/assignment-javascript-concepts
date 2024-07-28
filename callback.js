function explain_callback(name, age, task){
    console.log("Hello", name);
    console.log("Your Age is now:",age);
    task();
}
function washHand(){
    console.log('Wash Your Hand with soap.');
}
function takeahower(){
    console.log("Take Shower and get Refriesh.");
}
function FbScrolling(){
    console.log("You are Scerolling FB but not post");
}
explain_callback("Sogir Uddin", 14, washHand);
explain_callback("jogir uddin", 12, takeahower);
explain_callback("Mogir Uddin", 21, FbScrolling);
