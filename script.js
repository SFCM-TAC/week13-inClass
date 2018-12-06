classesObject = {
  TAC300: {
    title: 'Intro to Computer Science',
    day: "Wed",
    time: "6:00pm",
  },
  TAC120: {
    title: 'Production Techniques in Logic Pro',
    day: "Tues",
    time: "3:00pm",
  },
  TAC220: {
    title: "Into to Sound Design",
    day: "Fri",
    time: "10:00am",
  }
}
console.log('obj', classesObject);

var keys = Object.keys(classesObject);
for (var i=0; i<keys.length; i++) {
  console.log(classesObject[keys[i]]);
}

classesArray = [
  {
    id: 'TAC300',
    title: 'Intro to Computer Science',
    day: "Wed",
    time: "6:00pm",
  },
  {
    id: 'TAC120',
    title: 'Production Techniques in Logic Pro',
    day: "Tues",
    time: "3:00pm",
  },
  {
    id: 'TAC220',
    title: "Into to Sound Design",
    day: "Fri",
    time: "10:00am",
  }
];
console.log('array', classesArray);

function bananaClasses(item) {
    item.id = item.id.replace('TAC', 'BANANA');
}

classesArray.forEach(bananaClasses);
console.log('Banana Classes', classesArray);

function sortCompare(a, b) {
  return a.id > b.id;
}
// classesArray.sort(sortCompare);
console.log('Sored Array', classesArray);

var numbersArray = [1, 5, 7, 3, 42];
function reverseNumberCompare(a, b) {
  return a < b;
}
numbersArray.sort(reverseNumberCompare);
console.log('Sorted Numbers', numbersArray);


function filterFunction(item) {
  return item.day == 'Wed';
}
var wedClasses = classesArray.filter(filterFunction);
console.log('Wed Classes', wedClasses);
console.log('Classes', classesArray);
