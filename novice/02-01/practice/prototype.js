// 2
var mike = {name : 'Mike'};
var odd = [1];
var morning = function(){ return "Greeting";}
morning.info = 'Morning Greeting function';

var evening = morning;
var john = mike;
var even = odd;

var kate = mike;
kate = {name : 'Kate'};

evening.info = 'Evening greeting function';
john.name = 'John';
even[0]= 1;

console.log('first ==>' , morning.info, mike, odd);
console.log('second ==>', evening.info, john, even);
//2

//3
// var s = ""; 			// string
// var n = 0;				// number
// var b = false;			// boolean
// var sm = Symbol()		// symbol
// var a = [];				// array
// var o = {};				// object
// var f = function () { } 	// function

// console.log('typeof s.constructor ==>  ', typeof s.constructor, ',  name ==> ', s.constructor.name);
// console.log('typeof n.constructor ==>  ', typeof n.constructor, ',  name ==> ', n.constructor.name);
// console.log('typeof b.constructor ==>  ', typeof b.constructor, ',  name ==> ', b.constructor.name);
// console.log('typeof sm.constructor ==> ', typeof sm.constructor, ', name ==> ', sm.constructor.name);
// console.log('typeof a.constructor ==>  ', typeof a.constructor, ',  name ==> ', a.constructor.name);
// console.log('typeof o.constructor ==>  ', typeof o.constructor, ',  name ==> ', o.constructor.name);
// console.log('typeof f.constructor ==>  ', typeof f.constructor, ',  name ==> ', f.constructor.name);
//3

//4
// function Animal(name){
//     this.name = name;
//     this.getName = function(){
//         return 'Animal name is =>' + this.name;
//     }
// }

// var a = new Animal('Dog');
// console.log('a object ==>', a);
// console.log('a.getName() ==> ', a.getName());
// console.log('a.constructure === Animal', a.constructor === Animal);
//4

//5
// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.generate = '100';

// var a = new Animal('Dog');

// console.log('a.generation ==>', a.generation);

// console.log('has own generation ==>', a.hasOwnProperty('generation'));
//5

//6
// function Animal(className) {
//     this.className = className;
//   }
  
//   // add method to Animal prototype
//   Animal.prototype.getClass = function() {
//     return 'Animal class is : ' + this.className;
//   };
  
//   function Dog(name) {
//     // execute parent constructor
//     Animal.call( this, 'Animal' ); // pass this, arguments
    
//     this.name = name; // add new property
//   }
  
//   // save Animal.prototype in Dog.prototype
//   Dog.prototype = Object.create(Animal.prototype);
  
//   // add constructor reference on Dog prototype
//   Dog.prototype.constructor = Dog;
  
//   // add method to Dog prototype
//   Dog.prototype.getName = function() {
//     return this.name;
//   }
  
//   // create dog object
//   var d = new Dog( 'Tommy' );
  
//   console.log(d); // show dog
//   console.log(d.getClass()); // show Dog prototype
//6  

