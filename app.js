
// Assignment # 13-15

//Question No: 1

// var studentName = [];
// document.write(studentName)

//Question No: 3 

/*Initialize a string array*/

// var stringArray = ["apple","banana","cherry", "date"];

// document.write(stringArray)

//Question No: 4
/*Initialize a number array*/

// var numberArray = [10,20,40,50];
// document.write(numberArray[0])


//Question No: 5

/*Initialize a boolean array*/

// var booleanArray = [true,false,true,false]

// document.write(booleanArray[1])

//Question No: 6

/*Initialize a mixed array*/

// var mixedArray = ["apple",10,true,"banana",20,false,"cherry"];
// document.write(mixedArray[0]);

//Question No: 7

// var qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil.","PhD"];
// for(var i = 0;i < qualifications.length ; i++) {
//     document.write(qualifications[i]+"<br>");
// }

//Question No: 8

// var studentNames = ["Micheal","John","Tony"];

// var scores = [320,230,480];

// document.write("Score of "+studentNames[0] + " is " + " " + scores[0] + " "+".Percentage: " +scores[0]* 100 / 500 + "%" + "<br>")
// document.write("Score of "+studentNames[1] + " is " + " " + scores[1] + " "+".Percentage: " +scores[1]* 100 / 500 + "%" + "<br>")
// document.write("Score of "+studentNames[2] + " is " + " " + scores[2] + " "+".Percentage: " +scores[2]* 100 / 500 + "%" + "<br>")

//Question  No: 9

/*Initialize an array with color names.*/

var colorName = [];

document.write(colorName);

//--A

ask = prompt("what color want to add the beginning");
if (colorName){
    colorName.unshift(ask);
}
document.write(`First index color Name is :<b> ${colorName}</b><br>`)
