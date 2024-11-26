
// object literal===========================

const person = {
name :"basant",
age : 30,
city : "bareli",

};
console.log( person .city);
console.log(person.name);
console.log(person.age);

//array =======================================

const number = [10,20,30,89];

console.log(number[1]);
console.log(number[0]);

// function ==========================
// function is a way to group to group code togrther, you can run it anwhere
function sayHello(){
    console.log("raade");
    alert("hello");
    document.write("hello");

}
sayHello();

// parametter when declare the function============================================
function addition(num1,num2){
    return num1+num2;
}
// argument while calling the function
console.log(addition(14,23));
console.log(addition(1000,45));
document.getElementById("demo").innerHTML = addition(1000,500);



let numb = 45
function cube(){
    return numb*numb*numb;
}
console.log(cube());

// ===========================function expression
const multyple = function(x,y) {
    return x*y;
}
console.log(multyple(5,5));

// aeeow function=======================

const  divide = (a,b)=>{
    return a/b;
}

console.log(divide(100,20));