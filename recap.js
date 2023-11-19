// 1. variable

var myName = "masud";
// console.log(myName)

// match operation: +, -, *, /
// shorthand +=, -=, *=, /=
// ++, --

//Array
var frinds = ["abul", "babul", "kabul", "rahul", "dahul"];
// var friend = frinds[3];
frinds[3] = "masud";
// console.log(frinds);

// conditional

// <, >, <=, >=, ==, ===, !=, !==,

if (frinds.length < 8) {
  //   console.log("true");
} else {
  //   console.log(false);
}

for (i = 0; i < 10; i++) {
  //   console.log("tui valo hoye ja");
}

//function

function bySingara(taka) {
  var myBudget = 100;
  if (taka <= myBudget) {
    text = "amake singara din";
  } else if (taka > myBudget) {
    text = "amake nan ruti ar gril din";
  }
  return text;
}
// var result = bySingara(50);
// console.log(result);

// object

var jantus = {
  brightness: "forsa",
  height: 5,
  bapeTaka: "borolox",
  dimand: "valoi",
};

for (var propertyNamne in jantus) {
  var value = jantus[propertyNamne];
}

console.log(jantus, value);
