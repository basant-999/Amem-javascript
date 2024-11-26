var heading = document.getElementById("demo");
heading.innerHTML = "radde "

var name = "basant";
var age = 25;
console.log(name+" "+age);

heading.innerHTML = name +" "+age;

// to get value from user ?===========================

// var userName = prompt("enter your name");
// var userAge = prompt("enter your age");

// heading.innerHTML  = userName+" "+userAge;

// ==================================
var userColor = prompt("enter your color");
var bg = prompt("enter your bg");

heading.style.color = userColor;
heading.style.backgroundColor = bg;

// ==============
var myimage = document.getElementById("img");
myimage.src = "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg";

// ======================take a name from user and display in innerhtml of element and change its style?