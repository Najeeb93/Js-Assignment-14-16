
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

// var colorName = [];

// document.write(colorName);

//--A

// ask = prompt("what color want to add the beginning");
// if (colorName){
//     colorName.unshift(ask);
// }
// document.write(`First index color Name is :<b> ${colorName}</b><br>`)

//--B

// if (colorName){
//     var endChange = prompt("What color wants to add to the end");
//     colorName.push(endChange);
// }  
// document.write(`Last index Color Name is :<b> ${endChange}</b> <br>`);

//--C

// var add1More = prompt("Enter one more to add 1 at beginning");
// var add2More = prompt("Enter one more to add 1 at beginning");

// if (add1More && add2More){
//     colorName.unshift(`${add1More}`);
//     colorName.unshift(`${add2More}`);

//     document.write(`Color Add at beginning :<b> ${add1More},${add2More}</b><br>`);
// }

//--D

// document.write(`deleted first color name : ${colorName.shift("")}<br>`);

//--E

// var lastColor = colorName.pop("");

// document.write(`Delete last array ${lastColor}<br>`);

//--F

// var index = +prompt("Which index you want to add a color");
// var colorAdd = prompt("Which color name you want "+ index);

// colorName.splice(index,0,colorAdd);
// document.write(`you selecte index ${index} <br> you selecte color :${colorAdd} <br> to added on index ${index} <br> your result is index ${index} and color ${colorAdd} <br>`);

// var total = colorName;
// document.write(`Result of Array is ${total} <br>`);

//--G

// var deleteIndex = +prompt("Which index you want to delete");
// var deleteColor = +prompt("How many colors you want delete");
// colorName.splice(deleteIndex,deleteColor);
// document.write(`you selecte index for delete from ${deleteIndex}<br> you want to delete ${deleteColor} color from index ${deleteIndex} <br>`)
// total = colorName;
// document.write(`Result of updated array is ${total}`);

//Question No: 10

var scoreOfstudent = [320,230,480,120]
document.write(`Student Scores Result before sort ${scoreOfstudent}<br>`)
scoreOfstudent.sort()
document.write(`Result of sort Array is ${scoreOfstudent}`);