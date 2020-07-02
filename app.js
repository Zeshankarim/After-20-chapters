// chapter 21 -25-----------------------------------------------------
// Q1
// var firstName = prompt("Enter your first name");
// var LastName = prompt("Enter your last name");
// var fullName=firstName + LastName;
// document.write("Welcome " +fullName);

// Q2
// var favorite=prompt("What is your favourite mobile phoe model ");
// var str=favorite.length;
// document.write("My favorite phone is: "+ favorite+"<br/> Length of string: "+str);

// Q3
// var word="pakistani";
// var ind=word.indexOf("n");
// document.write("Index of n: "+ind);

// Q4 
// var word="Hello World";
// var ind=word.lastIndexOf("l");
// document.write("Index of I: "+ind);

// Q5
// var word="pakistani";
// var ind=word.charAt(3);
// document.write("Character at idex 3: "+ind);

// Q6
// var firstName = prompt("Enter your first name");
// var LastName = prompt("Enter your last name");
// var fullName=firstName + LastName;
// document.write("Welcome " +fullName);

// Q7
// var city="hyderabad ";
// var rep=city.replace(/hyderabad/g,"Islamabad");
// document.write("After replacement: "+rep);

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var neww=message.replace(/and/g,"&")
// document.write(neww);

// Q9
// var num=472;
// var str=num.toString();
// var newNum=Number(num);
// document.write("Value:"+str+"<br/> Type: String"+"<br/> Value "+newNum+"<br/> Type: nwmbwr");

// Q10
// var input=prompt("Enter text");
// var convert=input.toUpperCase();
// document.write(convert);

// Q11
// var input=prompt("Enter text");
// var convert=input.slice(0,1);
// var upper=convert.toUpperCase();
// var remaining=input.slice(1);
// var lowerr=remaining.toLocaleLowerCase();
// document.write(upper+lowerr);

// Q12
// var num = 35.36;
// var a=num.toString();
// var b=a.slice(0,2);
// var c=a.slice(3,5);
// document.write("Result "+b+c);

// Q13
// var userName=prompt("Enter your Name ");
// for(i=0;1<userName.length;i++){
//     if(userName.slice(i,i+1)==="!" || userName.slice(i,i+1)==="," || userName.slice(i,i+1)==="." ||userName.slice(i,i+1)==="@"){
// alert("Enter a valid user name");
//     }
// }

// Q14
// var A =["cake","apple pie","coolie","chips","patties"];
// var b=prompt("Enter to ABC Bakery.What do you want to order sir/ma'am");
// for(var i=0;i<A.length;i++){
// if(A[i]===b){
// alert(b+" is available at index "+A.indexOf(A[i])+" in our bakery");
// }

// else{
//     alert("We are sorry "+b+"is not available in our bakery");
// }
// break;
// }

// Q15
// var password=prompt("enter a password");
// var array1=[0,1,2,3,4,5,6,7,8,9];
// for(var i=0;i<password.length;i++){
// if(password[0]==array1[i] || password.length>6) {
// alert("password must start with character and atleast 6 character");
// break;
// }
// }

// Q16
// var university = "University of Karachi"; 
// var a=university.split("");
// for(var i=0;i<university.length;i++){
//     document.write(a[i]+"<br/>");
// }

// Q17
// var a=prompt("Enter a word");
// var b=a.slice(-1);
// document.write(b);

// Q18
// var a= "the quick brown fox jumps over the lazy dog";
// var b="the";
// var c=a.split(b).length-1;
// document.write(c);

// Chapter 26-30 ----------------------------------------------

// Q1
// var a =prompt("Enter a positive integer");
// var b=Number(a);
// var c=Math.round(b);
// var d=Math.floor(b);
// var e=Math.ceil(b);
// document.write("number: "+b+"<br/>round off value:"+c+"<br/>floor value:"+d+"<br/>ceil value:"+e );

// Q2
// var a =prompt("Enter egative floating pointr");
// var b=Number(a);
// var c=Math.round(b);
// var d=Math.floor(b);
// var e=Math.ceil(b);
// document.write("number: "+b+"<br/>round off value:"+c+"<br/>floor value:"+d+"<br/>ceil value:"+e );

// Q3
// var a=prompt("Enter a number");
// var b=a.slice(1)
// if(a[0]==="-"){
// alert(b);
// }

// Q4
// var a= Math.random();
// var b=a*6;
// var c=Math.round(b);
// alert(c);

// Q5
// var a= Math.random();
// var b=a*0.92233131;
// var c=Math.round(b);
// if (c===1){
//     document.write("ramdom coin value: Head");
// }
// else{
//     document.write("ramdom coin value: Tail");
// }

// Q6
// var a=Math.random();
// var b=a*1;
// var c=a*100;
// var d=b+c;
// var e=Math.round(d)
// document.write(e);

// Q7
// var weight=prompt("Enter your weight in kilograms");
// var integr=parseFloat(weight);
// document.write(integr);

// Q8
// var random=Math.random();
// var b=prompt("Enter a number between 1 to 10");
// var a=random*b;
// var secrecNum=3;
// if (a===secrecNum){
// document.write("Congratulations");
// }
// else{
//     alert("try again");
// }

// Chapter 31-34 ------------------------------------------------------------------------

// Q1
// var rightNow= new Date();
// document.write(rightNow);

// Q2
// var date =new Date();
// var month=date.getMonth();
// document.write(month);

// Q3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(nameOfToday);

// Q3 Alternate
// var date=new Date();
// var day=date.getDay();
// var a=day.toString();
// for(var i=0;i<7;i++){
// if(a[i]==0){
// document.write("Sun");
// }
// else if(a[i]==1){
//     document.write("Mon");
//  }
// else if(a[i]==2){
//     document.write("Tue");
// }
// else if(a[i]==3){
//     document.write("wed");
// }
// else if(a[i]==4){
//     document.write("Thr");
// }
// else if(a[i]==5){
//     document.write("Fri");
// }
// else if(a[i]==6){
//     document.write("Sat");
// }

// }

// Q4
// var date=new Date();
// var day=date.getDay();
// var a=day.toString();
// for(var i=0;i<7;i++){
// if(a[i]==0){
// document.write("Its fun Day");
// }
// else if(a[i]==1){
//     document.write("Mon");
//  }
// else if(a[i]==2){
//     document.write("Tue");
// }
// else if(a[i]==3){
//     document.write("wed");
// }
// else if(a[i]==4){
//     document.write("Thr");
// }
// else if(a[i]==5){
//     document.write("Fri");
// }
// else if(a[i]==6){
//     document.write("Its fun Day");
// }

// }

// Q5
// var date=new Date();
// var date=date.getDate();
// if(date<16){
// document.write("First fiftee days of Moth");
// }
// else{
//     document.write("Last days of the month");
// }

// Q6
// var today=new Date();
// document.write(today);
// var newTime=today.getTime();
// var date=new Date( "Jan 1,1970 00:00:00");
// var oldtime=date.getTime();
// var diff1=newTime-oldtime;
// document.write( "<br/> Elapsed millisecond since jauary 1,1970: "+ diff1);
// var mnit=diff1/1000/60;
// document.write("<br/> Elapsed minutes since jauary 1,1970: "+mnit);


// Q7
// var a=prompt("Enter time to test Am or Pm");
// if( a<12){
//     alert("Its AM")
// }
// else if (a>=12){
//     alert("Its PM")
// }

// Q8
// var date=new Date( "Dec 31,2020 00:00:00");
// alert(date);

// Q9
// var date=new Date( "Jun 18,2020 ");
// var aa=date.getDate();
// var a =new Date();
// var b=a.getDate();
// var c=b-aa;
// alert(c);

// Q10
// var a=new Date();
// var aa=a.getTime();
// var b=new Date("jan 01,2015 00:00:00");
// var bb=b.getTime();

// var c=(aa-bb)/1000;
// alert(c);

// Q11 
// var date=new Date();
// document.write(date+"<br/>");
// date.setHours(23);
// document.write(date);

// Q12
// var date=new Date();
// document.write(date+"<br/>");
// date.setFullYear(1915);
// document.write(date);


// Q13
// var a=prompt("Enter your age");
// var date=new Date();
// var b=date.getFullYear();
// document.write(b-a);

// Q14
// var customerName="zeshan"
// var a=new Date();
// var b=a.getMonth();
// var units=100;
// var chargesPerUnit=2;
// var totalBill=100*2;
// var due=20;
// var afterDue=totalBill+20;
// document.write("customer name "+customerName+"<br/> Curret Moth "+b+"<br/> Number of Units "+units+"<br/> charges per unit "+chargesPerUnit+"<br>  Net Amount Payable (within Due Date) "+totalBill+"<br/>  Late Payment Surcharge "+due+"<br/>  Gross Amount Payable (after Due Date) "+afterDue);

// Chapter 35-38 --------------------------------------------

// Q1
// function Currentdate(){
//     var date=new Date();
//     alert(date);
// }
// Currentdate();

// Q2
// function fullName(){
//     var istName=prompt("Enter your 1stname ");
//     var secName=prompt(" Enter your Last name");
//     alert("Welcome "+istName+" "+secName);

// }
// fullName();

// Q3
//  function addNum(){
//     var istNum =+prompt("Enter first number");
//     var second =+prompt("Enter second number");
//     add=istNum+second;
//     alert(add);
// }
// addNum();

// Q4
// function calculator(){
// var IstNum=+prompt("Enter first Number");
// var secNum=+prompt("Enter fSec Number");
// var opetator=prompt("Enter  operator");
// if (opetator==="-"){
// document.write(IstNum-secNum);
// }
// else if (opetator==="+"){
//     document.write(IstNum+secNum);
//  }
//  else if (opetator==="*"){
//     document.write(IstNum*secNum);
//  }
//  else if (opetator==="/"){
//     document.write(IstNum/secNum);
//  }
// }

// calculator();

// Q5
// function square(){
//     var num=+prompt("Enter a number for Squaring");
//     var square=num*num;
//     alert(square);
// }
// square();

// Q6
// function fraction(){
//     var IstNum=+prompt("Enter first neuminator for its fraction");
//     var secNum=+prompt("Enter first denominator");
//     var thirdNum=+prompt("Enter second neumiator Number for its fraction");
//     var forthNum=+prompt("Enter second denominator");
//     var result=(IstNum*forthNum)/(thirdNum*secNum);
//     alert(result);
// }
// fraction();

// Q7
// function count(){
// var first=+prompt("Enter first number ");
// var second=+prompt("Enter last number ");
// for(i=first;i<=second;i++){
// document.write(i+"<br/>");
// }
// }
// count();

// Q8
// function pythagorus(){
//   var base=+prompt("Enter base value ");
//   var perp=+prompt("Enter perpendicular  value ");
//   var hyp=base*base+perp*perp;
// function basee(){
//   var square=Math.sqrt(hyp);
//   document.write(square);
// }
// basee();
// }
// pythagorus();

// Q9
// function area(width,height){
//     var A=width*height;
//     alert(A);
// }
// area(4,5);

// Q10
// function ispalindrome(){
//     var instr=prompt("enter a word ");
//     instr=instr.toLowerCase();
//     // console.log(instr);
//     for(var i=0;i<instr.length;i+-1){
//         if (instr[i] !==instr[instr.length-1-i]){
//             document.write("It is not a palindrome");
//         }
//         break;
//     }
//     document.write("It is a palindrome");

// }
// ispalindrome();


// Q11
// function uppercase(str){
//     var array1 = str.split(' ');
//     var newarray1 = [];
      
//     for(var x = 0; x < array1.length; x++){
//         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newarray1.join(' ');
//   }
//   document.write(uppercase("the quick brown fox"));
  
// Q14
// function calcCircumference(){
// var radius=+prompt("Enter a radius of circle");
// var cons=2;
// var piee=3.14;
// var result= cons*piee*radius;
// return document.write(result);
// }
// calcCircumference();

// function calcArea(){
//     var radius=+prompt("Enter a radius of circle");
//     var piee=3.14;
//     var result= piee*radius*radius;
//     return document.write(result);
//     }
//     calcArea();


