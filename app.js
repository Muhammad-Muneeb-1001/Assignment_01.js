//chapter 01

// alert("Welcome to our Website")
// alert("Error! Please enter a valid password")
// alert('Welcome to JS Land...\nHappy Coding!')
// alert("Welcome to JS Land...")
// alert("Happy Coding!\n ")
// console.log("Hello... I can run JS through web browser's console")

//Chapter# 02

// var username; 
// var myName = "abc";
// var message = "Hello World";
// alert(message)

// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name)
// alert(age)
// alert(message)

// var a = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(a)

// var email = "example@+example.com"
// alert("My Email Address is " +  email + ".");
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book +'.' );
// var message = "Yah! I can write HTML content through JavaScript";
// document.write(message);

// var a = (escape("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"))
// alert(a)
//                                     //Chapter# 03

// var age = 23;
// alert("I am " + age + " years old")
// var visitor = "visitor1";
// alert("You have visited this site 14 times")

// var birthYear = 1997;
// document.write("My birth year is " + birthYear + '.' );
// document.write(" <br> Data type of my ddeclared variable is number");

// var visitorName = "John Doe";
// var productTitle = "T-Shirts";
// var quantity = 5;
// document.write(" Mr. " + visitorName + " ordered " + quantity  +  productTitle +"(s) on XYZ Clothing Store");

// Chapter# 04

//var one = 1, two = 'two', three;

// // Legal Variables
// var legalVariable = 1;
// var legal_variable = 2;
// var $legalVariable = 3;
// var Legalvariable =  4;
// var legalVariable5 = 5; 

// // Illegal Variables
// var 1illegalvariable = 1;
// var 2nd illegal Variable = 2;
// var ! illegal variable = 3;
// var #4th illegal_Variable = 4;
// var var = 5; 

// var a = "numbers";
// var b = "$";
// var c = "_";
// var d = "letter";
// var e = "sensitive";
// var f = "keywords";
// document.write(<strong>"Rules for naming JS variables"</strong>)
// document.write("<br> <br> Variable names can only contain" + a + ',' + b +
//     "and" + c + '.' < br > "For example $my_1stVariable" < br > " Variables must begin with a " + d + ',' + b + 'or' + c +
//     '.', "For example $name, _name or name"
//     < br > "Variable names are case" + e + "Variable names should not be JS " + f + )

                                //Chapter# 5

// var a = 5;
// var b = 3;
// var c= a + b;
// document.write("Sum of " + a + "and" + b + "is" + c + );

// var a = 5;
// var b = 3;
// var c= a - b;
// document.write("Subtraction of " + a + "and" + b + "is" + c + );

// var a = 5;
// var b = 3;
// var c= a * b;
// document.write("Multiplication of " + a + "and" + b + "is" + c + );

// var a = 5;
// var b = 3;
// var c= a / b;
// document.write("Division of " + a + "and" + b + "is" + c + );

// var a = 5;
// var b = 3;
// var c= a % b;
// document.writet("Modulus of " + a + "and" + b + "is" + c + );

// var a = "undefined";
// var b = 5;
// var c = ++b;
// var d = c + 7;
// var e = --d;
// var f = e / 3;
// var g =  0;
// document.write("Value after variable declaration is ", + " " + a);

// document.write("<br>Initial value: ", + " " + b);

// document.write("<br> Value after increment is ", + " " + c);

// document.write("<br> Value after addition is ",+ " " + d);

// document.write("<br> Value after decrement is ", + " " + e );

// document.write("<br> Value after division is ", + " " + f);

// document.write("<br> The remainder is ", + " " + g);


// var totalTickets =5;
// var costOfticket = 600;
// var totalCost = costOfticket * 6;
// document.write("Total cost to buy " + a + "tickets to a movie is " + totalCost +"PKR");



// var num = prompt("Enter Number", "0") //prompt user to enter the number

// var num = parseInt(num); //parse the num to number
// var i = 0;

// document.write('<table border="1" cellspacing="0">');
// for(i=1;i<10;i++) {
//     document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
// }



// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     document.write(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     document.write(message);
// } 
// cToF(25);

// fToC(70);

// var priceOfitem1 = 650;
// var priceOfitem2 = 100;
// var orderedQuantityItem1 = 3;
// var orderedQuantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = 2750; 

// document.write(<p>"Price of item 1 is " + priceOfitem1 +
// \n
// "Price of item 2 is " + priceOfitem2 +
// \n
// "Quantity of item 1 is " + orderedQuantityItem1 +
// \n
// "Quantity of item 2 is " + orderedQuantityItem2 +
// \n
// "Shipping Charges " + 100 +
// \n
// "Total Cost of your order is " + totalCost +</p>);

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = totalMarks / marksObtained * 100;

// document.write(<p><super>Marks Sheet</super> + \n + "Total Marks " + totalMarks + \n  
// "Marks Obtained " + marksObtained + \n "Percentage " + percentage +</p>);

// document.write("\n<strong>Currency in PKR</strong> "  )

// function uSd(dollar) 
// {
//   var uSd = dollar;
//   var uSdtoPkr =uSd * 104.80;
//   var message = uSd+'&#36; is ' + uSdtoPkr + ' PKR.';
//     document.write( message);
// }

// function sRiyal(riyal) 
// {
//   var sRiyal = riyal;
//   var sRiyaltoPkr = sRiyal * 28;
//   var message1 =  sRiyal+' SR is ' + sRiyaltoPkr + ' PKR.';
//     document.write(message1);
//  }

// var a = 5;
// var b = (a + 5) *(10/2);
// document.write(a); 



// var currentYear = 2016;
// var birthYear = 1992;
// var possibleAge = currentYear - birthYear;
// document.write(<strong>Age Calculator</strong>);
// document.write(possibleAge);


// var radiusOfaCircle = 20;
// var circumferenceOfCircle = (2*30142*radiusOfaCircle);
// var areaOfCircle = (3.142*radiusOfaCircle);
// document.write("Radius of a circle: " + radiusOfaCircle +
// "\n The cicumference is: " + circumferenceOfCircle + 
// "\n The area is: " + areaOfCircle +);


// var favouriteSnack = "chocolate chip";
// var currentAge = 15;
// var maximumAge = 65; 
// var estimatedSnackperDay = 3;
// var totalSnacks = (65*365)/3-(15*365);
// document.write(<strong> The Lifetime Supply Calculator</strong>)
// documentt.write("Favourite Snack: " + favouriteSnack + 
// "<br>Current Age: " + currentAge + "<br>Estimated Maximum Age: " + maximumAge +
// "<br> Amounts of snacks per day: " + estimatedSnackperDay +);

                        //Chapter# 6-9

// var a = 10;
// var b = ++a;
// var c = a++;
// var d = --a;
// var e = a--; 


// document.write("Result " "<br>The value of a is: " +b+"<br>Now the value  of a is: "+a);
// document.write("The value of ++a is: " +b+"<br>Now the value  of a is: "+b);
// document.write("The value of a++ is:<br> " +b+"<br>Now the value  of a is: "+c);
// document.write("The value of --a is: <br>" +b+"<br>Now the value  of a is: "+d);
// document.write("The value of a-- is: <br>" +b+"<br>Now the value  of a is: "+e);



// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//                             [Output Explanation]       
// //    1 - 1/0 + 1 + 1-0 == 3 
// var result1 = --a;
// var result2 = --a - --b;
// var result3 = --a - --b + ++b;
// var result4 = --a - --b + ++b + b--;
// document.write("a is:<br> " +a);
// document.write("<br>b is:<br> " +b);
// document.write("result is: " +result);

// var user = prompt("Enter your name:", "Your name here");
// alert("Welcome the Web", user);


// var user = +prompt("Enter your number here", "multiplication table")
// alert(user);


// var num = prompt("Enter Number", "0") //prompt user to enter the number
// var num = parseInt(num); //parse the num to number
// var i = 0;
//     document.write('<table border="1" cellspacing="0">');
// for(i=1;i<10;i++) {
//     document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
// }


// var subject1 = prompt("Enter subject1");
// var subject2 = prompt("Enter subject2");
// var subject3 = prompt("Enter subject3");
// var total = 100;
// var subject1Obtained = prompt("Enter " + subject1 + " Marks");
// var subject2Obtained = prompt("Enter " + subject2 + " Marks");
// var subject3Obtained = prompt("Enter " + subject3 + " Marks");
// var totalMarks = 300;
// var percentage = ((subject1Obtained + subject2Obtained + subject3Obtained) / totalMarks) * (100);
// document.write(percentage);

// document.write(<strong>
// "Report Card " </strong> <table>
//     <tr>
//       <th>Subject</th>
//       <th>Total Marks</th>
//       <th>Obtained Marks</th>
//       <th>Percentage</th>
//     </tr>
//     <tr>
//       <td>English</td>
//       <td>100</td>
//       <td>54</td>
//       <td>54%</td>
//     </tr>
//     <tr>
//       <td>Maths</td>
//       <td>100</td>
//       <td>54</td>
//       <td>54%</td>
//     </tr>
//     <tr>
//       <td>Urdu</td>
//       <td>100</td>
//       <td>48</td>
//       <td>48%%</td>
//     </tr>
//   </table>
//   );


                        //  Chapters# 9-11


// var city = prompt("Enter city name", "city");
// if(city== "Karachi"){
//     alert("Welcome to the city of lights");
// }




// var message = prompt("Enter your gender", "gender");
// if(message == "male"){
//     alert("Good Morning Sir");
// }
// else {
//     alert("Good Morning Ma'am");
// }

// var color = prompt("Enter Color of Road Traffic Signal", "color");
// if(color == "Red", "red"){
//     alert("Must stop")
// }
// else if(color == "Yellow", "yellow"){
//     alert("Ready to move")
// }

// else {
//     alert("Move now")
// }



// var fuel = +prompt("Enter remaining fuel (in litres)", ("fuel"));
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car")
// }



                    //condition is true
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
                    //no output
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
                    //condition 2 is true
                    //condition 4 is true
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
                    //the cost equals
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
                        //true
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


// var subject1 = prompt("Enter subject1");
// var subject2 = prompt("Enter subject2");
// var subject3 = prompt("Enter subject3");
// var total = 100;
// var subject1Obtained = prompt("Enter " + subject1 + " Marks");
// var subject2Obtained = prompt("Enter " + subject2 + " Marks");
// var subject3Obtained = prompt("Enter " + subject3 + " Marks");
// var totalMarks = 300;
// var totalObtainedMarks = parseInt(subject1Obtained) + parseInt(subject2Obtained) + parseInt(subject3Obtained); 
// var percent = totalObtainedMarks * 100 / 300;
// documents.write(<strong>"Marks Sheet"</strong>, + "<br/");
// document.write(":Total Marks: ", + total+ "<br/>");
// document.write("Marks Obtained: ", +totalObtainedMarks + "<br/>")
// document.write( "Percentage: ",percent +"% <br/>");
// //var percent = +prompt("Enter your percent");
//  if(percent >= 80 && percent<= 100){
//     document.write("Grade: A-1",  + "<br/>")
//     document.write("Remarks: Excellent ", + "<br/>")

    
//  }                                   
// else if(percent >= 70 && percent<= 80){
//     document.write("Grade: A-1",  + "<br/>")
//     document.write("Remarks: Excellent ", + "<br/>")

//     }
// else if(percent >= 60 && percent<= 70){
//     document.write("Grade: A",  + "<br/>")
//     document.write("Remarks: Good ", + "<br/>")

//     }
// else if(percent >= 50 && percent<= 60){
//     document.write("Grade: B",  + "<br/>")
//     document.write("Remarks: You need to improve ", + "<br/>")

//     }
// else{
//     document.write("Grade: Fail",  + "<br/>")
//     document.write("Remarks: Sorry ", + "<br/>")

//     }



// var secretNumber = 7;
// var guessNumber = prompt("Guess the number", "number");
// if (guessNumber == secretNumber){
//     alert("Bingo! Correct answer");
// }
// else if( guessNumber == 6 || guessNumber == 8){
//     alert("Close enough to the correct answer");
// }

// else{
//     alert("Try again");
// }


// var number = prompt("Enter the number", "number");
// if (number / 3){
//     alert("Number is divisible of 3");
// }
// else{
//     alert("Number is not divisible of 3");
// }


// var number = prompt("Enter the number", "number");
// if (number / 2){
//     alert("Number is even");
// }
// else{
//     alert("Number is odd");
// }


// var temperature = prompt("Enter Temperature here", "temperature");
// if (temperature > 40){
//     alert("It is too hot outside")
// }
// else if (temperature > 30){
//     alert("The Weather today is Normal")
// }

// else if (temperature > 20){
//     alert("Today's Weather is cool")
// }
//  else if (temperature > 10){
//     alert("OMG! Today's weather is so Cool");
// }


                        //  Chapters# 12-13

// var userInput = prompt("Enter the character", "character");
// if(userInput==A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){
//     document.write("Uppercase Letter:", + userInput + ".");
//     userInput.charCodeAt()
// }
// else if(userInput == a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){
//     document.write("Lowercase Letter:", + userInput + ".");
//     userInput.charCodeAt()
// }
// else{
//     alert("you entered wrong value")
// }

// var userInput1 = +prompt("Enter the number", "number");
// var userInput2 = +prompt("Enter the number", "number");
// if (userInput1 == userInput2){
//     alert("the two integers are equal")
// }
// else if (userInput1 >= userInput2){
//     alert("integer1 is larger number")
// }


// else if (userInput2 >= userInput1){
//     alert("integer2 is larger number")
// }


// var userInput1 = +prompt("Enter the number", "number");
// var userInput2 = +prompt("Enter the number", "number");
// if (userInput1 == userInput2){
//     alert("the two integers are equal")
// }
// else if (userInput1 >= userInput2){
//     alert("integer1 is larger number")
// }


// else if (userInput2 >= userInput1){
//     alert("integer2 is larger number")
// }



// var userInput1 = +prompt("Enter the number", "number");
// var userInput2 = +prompt("Enter the number", "number");
// if (userInput1 == userInput2){
//     alert("the two integers are equal")
// }
// else if (userInput1 >= userInput2){
//     alert("integer1 is larger number")
// }


// else if (userInput2 >= userInput1){
//     alert("integer2 is larger number")
// }



// var userInput1 = +prompt("Enter the number", "number");
// var userInput2 = +prompt("Enter the number", "number");
// if (userInput1 == userInput2){
//     alert("the two integers are equal")
// }
// else if (userInput1 >= userInput2){
//     alert("integer1 is larger number")
// }


// else if (userInput2 >= userInput1){
//     alert("integer2 is larger number")
// }



// var userInput1 = +prompt("Enter the number", "number");
// if (userInput1 >= 1){
//     alert("it is positive number")
// }
// else if (userInput1 <=-1){
//     alert("it is negative number")
// }
// else if (userInput2 == 0){
//     alert("it is zero")
// }

// var findVowel = prompt("Enter string", "here");
// function(findVowel) {
//     var vowels = ["a", "e", "i", "o", "u"];
//     for(var i = 0; i < vowels.length; i++){ 
//         if(findVowel === vowels[i]){
//             return true;
//          }
//     }
//     return false;
// };

    // var pass1 = prompt('pass1');
    // var pass2 = prompt('pass2');
    
    // if(pass1.value == pass2.value  && pass1.value.length <= 6 ){
        
    //     document.write ("Correct! The password you entered matches the original password");
    // }
	// else if(pass1.value != pass2.value) {
    //     document.write("Incorrect password");
    // }
	
	// // else if(pass1.value.length > 5){   
	// // 	document.write( "character number ok!");
	// // 	}
	// else{
        
    //    document.write( " you have to enter at least 6 digit!");
    
    // var greeting;
    // var hour = 13;
    // if (hour < 18) {
    // alert( "Good day"+greeting )
    // }
    // else {
    // alert("Good evening" +greeting )
    // }
        

    // var inputTime = prompt("Enter time in 24hrs format...", "time");
    // var hour = 1900;
    // if (hour >= 0000 && hour < 1200) {
    // alert( "Good morning" +greeting )
    // }
    // else if (hour >= 1200 && hour < 1700) {
    //     alert( "Good afternoon" +inputTime  )
    //     }
    // else if (hour >= 1700 && hour < 2100) {
    //         alert( "Good evening" +inputTime )
    //         }
                
    // else if(hour >= 2100 && hour <= 2359) {
    // alert("Good night" +inputTime  )
    // }
    // else{
    //     alert("a" +inputTime )
    // }

                        
    
                        // Chapter# 14-16

                        // //empty array using literal notation 
// var studentNames;       
// studentNames = [];
// document.write(studentNames);
 
                        // //empty array using object notation 
// const studentNames = new Array()

// var carsNames = ["Lamborghini", "BMW", "Bughatti", "Ford", "Mercedes Benz"];
// document.write("Car is Manufactured by " + cars[2]);


// var carsModels = ["2010", "2016", "2018", "2014", "2020"];
// document.write("Car is Manufactured by " + carsModel[2]);


// var cars = ["Lamborghini 2010", "BMW 2016", "Bughatti 2018", "Ford 2014", "Mercedes Benz 2020"];
// if (cars.includes("Nissan")){
//     document.write("latest model");
// }
// else{
//     document.write("try other names");
// }


// var cars = ["Lamborghini ", "2010 ", "BMW ","2016 ", "Bughatti ", "2018 ", "Ford ","2014 ", "Mercedes Benz ", "2020 "];
// document.write(cars);


//  var availableEducationQualificationsInPakistan = ["SSC", "HSC", "BCS",
// "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<strong>Qualification:</strong>");
// document.write("<br/><br/><br/>1) " +availableEducationQualificationsInPakistan[0]);
// document.write("<br/>2) " +availableEducationQualificationsInPakistan[1]);
// document.write("<br/>3) " +availableEducationQualificationsInPakistan[2]);
// document.write("<br/>4) " +availableEducationQualificationsInPakistan[3]);
// document.write("<br/>5) " +availableEducationQualificationsInPakistan[4]);
// document.write("<br/>6) " +availableEducationQualificationsInPakistan[5]);
// document.write("<br/>7) " +availableEducationQualificationsInPakistan[6]);
// document.write("<br/>8) " +availableEducationQualificationsInPakistan[7]);



// var name = [];
// var size = 1; //Maximum Array size
// for (var i=0; i < size; i++) {
	// 	//Taking Input from user
// var name1 = prompt("Enter first student name" + (i+1) );
//     var name2 = prompt("Enter second student name" + (i+1) );
//     var name3 = prompt("Enter third student name" + (i+1) );
//     var score1 = prompt("Enter first student score" + (i+1) );
//     var score2 = prompt("Enter second student score" + (i+1) );
//     var score3 = prompt("Enter third student score" + (i+1) );
// }
// //Print the array in the console.
// document.write(name);
// var totalMarks = 500;
// var percentage1 = ((score1) * 100 / totalMarks);
// var percentage2 = ((score2) * 100 / totalMarks);
// var percentage3 = ((score3) * 100 / totalMarks);

// // document.write(percentage);
// document.write("Score of ", + name1 + "is ", +score1+ ". Percentage: " +percentage1+ "%");
// document.write("<br/>Score of ", + name2 + "is ", +score2+ ". Percentage: " +percentage2+ "%");
// document.write("<br/>Score of ", + name3 + "is ", +score3+ ". Percentage: " +percentage3+ "%");

// var name = [];
// var size = 1;
// for (var i=0; i < size; i++){
//     var score1 = prompt("Enter first student score" + (i+1) );
//     var score2 = prompt("Enter second student score" + (i+1) );
//     var score3 = prompt("Enter third student score" + (i+1) );
// }


// var a = [1, 5, 12, 4, 10, 3, 6];
// var b = [1, 5, 8, 14, 0, 3, 16];
// b.sort();
// document.write("Scores of Students: ", +a);
// document.write("<br/>Ordered Scores of Students: ", +b);


// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cityNames.slice(2,4);
// document.write("Cities list: ", + cityNames);
// document.write("<br/>Selected cities list: ", +selectedCities+);


// var arr = [ "This", "is", "my", "cat" ];
// document.write("Array: ", + arr);

// document.write("<br/>String: ", + arr.join(" "));


// var newArraay = ["keyboard","mouse","printer","monitor"];
// array = [];
// array.push("keyboard");
// array.push("mouse");
// array.push("printer");
// array.push("monitor");
// array.shift();              //   fifo representation
// document.write("<br/> Devices: " + array);
// document.write("<br/> Output: " + array);
// document.write("<br/> Output: " + array);
// document.write("<br/> Output: " + array);
// document.write("<br/> Output: " + array);



// var newArraay = ["keyboard","mouse","printer","monitor"];
// array = [];
// array.push("keyboard");
// array.push("mouse");
// array.push("printer");
// array.push("monitor");
// array.pop();              //    lifo representation
// document.write("<br/> Devices: " + array);
// document.write("<br/> Output: " + array);
// document.write("<br/> Output: " + array);
// document.write("<br/> Output: " + array);
// document.write("<br/> Output: " + array);

// var arr = ["Nokia", "Samsung", "Iphone"];
// document.write("<select>");
// for (var i= 0; i < arr.length; i++){
// document.write(" <option>" + arr[i] + "</option>");
// }
// document.write("</select>");
 
                            //  Chapter# 17- 20

                            

// var activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];
// console.table(activities);


// var activities = [
//     [0],
//     [1],
//     [2],
//     [3],
// ];
// console.table(activities);


// var userNumber = +prompt("Enter a number to show its multiplication table", "number" );
// var tableLength = +prompt("Enter length of multiplication table", "length" );
// var a = 1;
// var b;
// document.write("Multiplication table of: " + userNumber);
// document.write("<br>Length: " + tableLength);
// for(var i = a; i <= tableLength; i++) {
// b =  userNumber * i
//     document.write(userNumber + " " + "*" + i + " = " + b + "<br>")
// }


// var fruits = ["apple", "<br>banana", "<br>mango", "<br>orange", "<br>strawberry"];
// for(var i = 1; i <= 1; i++){
//     document.write("<br>"+fruits);
//     document.write("<br><br>Element at index 0 is: " +fruits[0]);
//     document.write("<br><br>Element at index 1 is: " +fruits[1]);
//     document.write("<br><br>Element at index 2 is: " +fruits[2]);
//     document.write("<br><br>Element at index 3 is: " +fruits[3]);
//     document.write("<br><br>Element at index 4 is: " +fruits[4]);
// }


























