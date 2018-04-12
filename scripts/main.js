// Arrays
// Push Exercise
// var main = ['Hogan', ' Bret', ' Austin'];

// alert(main[0]);


// main.push(' Rock');
// alert(main[3]);
// main.push(' Lesnar');
// alert(main[4]);
// main.push(' Cena');
// alert(main[5]);
// main.push(' Lesnar');
// alert(main[6]);
// main.push(' Roman');
// alert(main[7]);
// alert(main);

// alert('length = ' + main.length);

// alert("rivals");

// var rivals = ['Savage', ' Michaels', ' Rock'];
// alert(rivals[0]);

// rivals.push(' HHH');
// alert(rivals[3]);
// rivals.push(' HHH');
// alert(rivals[4]);
// rivals.push(' Orton');
// alert(rivals[5]);
// rivals.push(' Roman');
// alert(rivals[6]);
// rivals.push(' Strauman');
// alert(rivals[7]);
// alert(rivals);

// alert('length = ' + rivals.length);

// var colors = new Array('cyan',' magenta', ' yellow', ' black');

// FOR LOOPS
// console.log('HELLO');
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i++) {
//   console.log('I love the number ' +i);   
// }
// ForEach Loop
// var numbers = [33, 54, 76, 34, 2, 6];
// numbers.forEach(function (number){
//   console.log(number);
// });

// For Loop Version of Previous
// var numbers = [33, 54, 76, 34, 2, 6];
// for (var i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }

// WHILE LOOPS
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;   
// }

// CONDITIONALS

// IF STATEMENTS
var var1 = 3;
var var2 = 4;
if (var1 == var2 || var1 == 3) {
  console.log('This is true');
} else {
  console.log('This is false');
}

// SWITCHES

var fruit = 'kiwi';
switch (fruit) {
  case 'banana':
    alert('I like bananas');
    break;
  case "apple":
    alert('I love apples');
    break;
  case "orange":
    alert('I love oranges');
    break;
  default:
    alert('I like all other fruits');
    break;
}

// OBJECTS

// Type A - Object Literal

// var person = {
//   firstName: 'Jean',
//   lastName: 'Jabouin',
//   age: '27',
//   children: ['Jean', 'Travis', 'George', 'Lynn'],
//   address: {
//     street: '555 something ave',
//     city: 'Fort Lauderdale',
//     state: 'FL'
//   },
//   fullName: function (){
//     return this.firstName + ' ' + this.lastName
//   }
// }

// console.log(person.firstName)
// console.log(person.age)
// console.log(person.children[1])
// console.log(person.address)
// console.log(person.fullName());

// Type B - Object Constructor (Not good for multiple objects because you have to do this again)

// var apple = new Object()
// apple.color = 'red'
// apple.shape = 'round'

// adding a function
// apple.describe = function (){
//   return 'An apple is the color ' + this.color + ' and has a ' + this.shape + ' shape.'
// }

// console.log(apple);
// console.log(apple.describe())

//  Type C - Constructor Pattern (Great for multiple objects. Use this for that scenario!)

// function Fruit (name, color, shape){
//   this.name = name
//   this.color = color
//   this.shape = shape

// }

// var apple = new Fruit('apple', 'red', 'round')
// var melon = new Fruit('melon', 'green', 'round')

// console.log(melon.color)

// Array of Objects
// var users = [
//   {
//       name: 'John Doe',
//       age: 30
//   },
//   {
//       name: 'Mark Smith',
//       age: 44
//   },
//   {
//       name: 'Shelly Williams',
//       age: 20
//   }
// ];


// console.log(users[0])
// console.log(users[1])
// console.log(users[2])

//  EVENTS
function doClick() {
  alert('You clicked!')
};

// Adds the date

function showDate(){
  var time = document.getElementById('time')
  time.innerHTML = Date();
}

function clearDate(){
    var time = document.getElementById('time')
    time.innerHTML = ''

}

// FORMS

// Changes the background
// function changeBackground(x){
//   console.log(x.value);
//   var body = document.getElementById('heading');
//   heading.style.color = x.value;
// }

// Validates the Form
function validateForm(){
  var firstName = document.forms['myForm']['firstName'].value

  if (firstName == null || firstName === '') {
    alert('First name is required')
    return false
  }

  if (firstName.length < 3) {
    alert('First name must be AT LEAST 3 characters')
    return false
  }

}


  // Changes the button -->
// function changeText(id){
//   id.innerHTML = 'You clicked!'
// }