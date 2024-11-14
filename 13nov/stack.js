
// these are four way of console out put
console.log("hello world");
// window.alert("hello world");
document.write("hello world");

document.getElementById("demo").innerHTML = "hello world";

var global = "basant";
global = "peter"
console.log(global);

// =====================
// var has global scop and let const has block or function scope
{var a = 10;
    let b=20;
    const c = 30;
console.log(b);
console.log(c);
}
console.log(a);
