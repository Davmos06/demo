//for (var i = 100; i > 3; i /= 2) {
//  console.log(i);
//}

// var j = 6;
// while (j >= 0) {
//   console.log(j);
//   j -= 2;
// }

// var x = -3;
// do {
//   console.log(x);
//   x += 2;
// } while (x <= 11);

// for (var i = 10; i <= 20; i += 2) {
//   if (i > 15) break;
//   console.log(i);
// }

// var arr = [6, 7, 9, 13, 52];
// for (var i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
//   console.log("Element " + (i + 1) + ": " + arr[i]);
// }

var person = null;
if (confirm("Are you sure?")) {
  person = prompt("Write your name");
  alert("Heloo," + person);
} else {
  alert('You clicked "Отмена"');
}
