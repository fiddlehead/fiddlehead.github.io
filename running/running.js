var daily =  prompt("Enter daily Mileage: ");

if (isNaN(daily)) {
  var daily =  prompt("You must enter a number. Enter daily Mileage: ");
  document.write("Congratulations! You completed " + daily + " miles today.")
} else {
  document.write("Congratulations! You completed " + daily + " miles today.")
}

var week = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sunday: ""
}
week(Friday) = daily;
document.write(week(Friday));
// week['Friday'] = today

// for i in week:
//   if i == "Friday":
//     print today
//     print week
