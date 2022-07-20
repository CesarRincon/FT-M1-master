x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a; // b = 8
    console.log(b); // 8
    b = c; // 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 10
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1

// --------------------------------------------------

// console.log(bar); // undefined
// console.log(baz); // ERROR: baz no definido
// foo();
// function foo() { console.log('Hola!'); } // NO entra por el error en baz
// var bar = 1;
// baz = 2;

//----------------------------------------------------

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco

//----------------------------------------------------

var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony

//----------------------------------------------------

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The flash
    console.log(pm); // Reverse flash
}
console.log(instructor); //The Flash
console.log(pm); // Franco

//---------------------------------------------------

6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" //9px
"$" + 4 + 5  //'$45'
"4" - 2 //2
"4px" - 2 //NAN
7 / 0 // Infinity
{}[0] // 0
parseInt("09") //9
5 && 2 // 2
2 && 5 // 5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] // 23
3>2>1 //False
// [] == ![] // True

//--------------------------------------------------

function test() {
  console.log(a); //undefined porque no se ha definido antes la variable
  console.log(foo()); // Se ejecuta la funcion, y muestra 2

  var a = 1; // Se decalara la variable a
  function foo() {
     return 2; // Retorna el valor 2
  }
}

test();

//--------------------------------------------------

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false) //Retorna undefined

//--------------------------------------------------

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined

//---------------------------------------------------

//En esta función primero muestra el 1, luego el 4, despues 3 y de ultimo 2 por la funcion timeout que es asincrona
function printing() {
  console.log(1); //1
  setTimeout(function() { console.log(2); }, 1000); //2
  setTimeout(function() { console.log(3); }, 0); //3
  console.log(4);// 4
}

printing();

//---------------------------------------------------
