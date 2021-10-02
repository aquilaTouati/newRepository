// 4 > 3 //t
// 4 >= 3 //true
// 4 < 3 //false
// 4 <= 3 // false
// 4 == 4 // true
// 4 === 4 // true
// 4 != '4' //  false
// 4 == '4'// true
// 4 > 3 && 10 < 12 // true 
// 4 > 3 && 10  > 12 // false
// 

// var b = prompt("donner la base")
// var h = prompt("donner la hauteur")

//  var area = 0.5*b*h
// alert(area)

// var a = prompt("donner le perimetre");
// a= parseFloat(a);

// var b = prompt ("donner le perimetre")
// b= parseFloat(b);

// var c = prompt ("donner le perimetre")
// c= parseFloat(c);

// var perimeter= a+b+c
// alert(perimeter)


// var length = prompt("longueur");
// length= parseFloat(length);

// var width = prompt("largeur");
// width= parseFloat(width);

// var area = length*width;
// alert(area)

// var perimeter = 2*(length+width)
// alert(perimeter)


// var pi = 3.14

// var r = prompt("give r")
// r=parseFloat(r);

// var radius = pi*r*r
// alert(radius)

// function area(a,b,c){
// var perimeter=a+b+c;
// alert(perimeter);
// }





// var age = prompt("Enter your age:");
// if (age >= 18) {
//     alert("You are old enough to drive");
// }
// else{ 
//     var reste = (18-age)
//     alert("you still have " + reste);
// }

// var age = prompt("Enter your age:");
// var myAge = 40;
// var yourAge = 20;
// if (yourAge < myAge ) {
//     console.log("You are younger")
// }
// else{

//     console.log("Your are older")
//     }


//     var number = prompt("give a number");
//     if (number%2==0) {
//         alert("It is an even number")
//     }
//         else{
//             alert("It is an odd number")
//         }


// var score= prompt("give your score");
// if(0<=score && score <= 49){
//     alert("F")
// }

// if(50<=score && score <= 59){
//     alert("D")
// }
// if(60<=score && score <= 69){
//     alert("C")
// }
// if (70<=score && score <=89){
//     alert("B")
// }
// if (90<=score && score <= 100){
//     alert("A")
// }


// var season = prompt ("give the month");
// if(season.toLowerCase()=="september"||season.toLowerCase()=="october"||season.toLowerCase()=="november"){
//     alert("Autumn")
// }
// if(season.toLowerCase()=="december"||season.toLowerCase()=="january"||season.toLowerCase()=="february"){
//     alert("Winter")
// }
// if(season.toLowerCase()=="march"||season.toLowerCase()=="april"||season.toLowerCase()=="may"){
//     alert("Spring")
// }
// if(season.toLowerCase()=="june"||season.toLowerCase()=="july"||season.toLowerCase()=="august"){
//     alert("Summer")
// }


// function fullName(firstName,lastName){
//     console.log(firstName,lastName)
// }

// fullName("Aquila","Touati")

// function addNumbers(a,b){
//     var sum=a+b;
// return sum
// }

// var r = addNumbers(8,12)
// console.log(r)

// function perimeterOfRectangle(lenght,width){
//    return (2*(lenght+width))
// }
// var perimeter=perimeterOfRectangle(5,6)
// console.log(perimeter)

// function volumeOfRectPrism(length,width,height){
//     return(length*width*height)
// }
// var volume=volumeOfRectPrism(2,4,3)
// console.log(volume)


// function areaOfCircle(r){
//     return(3.14*r*r)
// }
// var area=areaOfCircle(2)
// console.log(area)



// function bodyMassIndex(weight,height){
//     if(30>weight||30<weight) return "weight must be in kg";
//    if(1> height || height>3) return "Height must be in meter";
//     return weight/(height**2)

// }
// var bmi=prompt("enter your weight")
// var bmi=prompt("enter your height")
// if(bmi<=18.5){
//     alert("Underweight")
// }
// if(18.5>=bmi && bmi <= 24.9){
//     alert("Normal")
// }
// if(25>=bmi && bmi <= 29.9){
//     alert("Overweight")
// }
// if(bmi>=30){
//     alert("Obese")
// }


// function salaryBonus (salary, bonus, unit){

//     var a=prompt("enter your salary");
//     var b=prompt("enter your bonus");

//     if(typeof bonus==boolean){  
//         if(bonus==true){
//         return salary*10 + unit;
//     }
//     if (bonus==false){
//         return salary + unit;
//     }
//     }
//     }
//     console.log(salatBonus(100,false,"$"));




//  function convertName (firstName, lastName){

//  }
//  console.log.toUperCase()(str.charAt(0));
// console.log.toUperCase()(str.charAt(1));



// for (var i = 0; i < 11; i= i + 1) {
// console.log(i*i);
//  }

//  var i=0
//  while(i<10){
//   console.log("i")
//   i=i+1
//  }


// var totalNumbers= 1
// var i=0
// console.log(totalNumbers
// do{
// totalNumbers= i*i
// i=i+1
// }while(i < 100)
// console.log(totalNumbers)




// var sum=0
// var i=0
// console.log(sum)

// do{

// sum=sum+i
// i=i+1
// }while(i < 100)
// console.log(sum)

// var sum=0
// var i=0
// console.log(sum)

// do{

// sum=sum+i
//  i=i+2
// } while(i < 100)
// console.log(sum)

// var sum=0
// var i=1
// console.log(sum)

// do{

// sum=sum+i
//  i=i+2
// } while(i < 100)
// console.log(sum)







// for (var i = 0; i < 102; i= i + 2) {
// console.log(i);
//  }


// for(var i=0; i< 100; i= i + 1){
// console.log(i=i+1);
// }






// var elements=[1,2,3,4,5,6]
// elements=[];
// console.log("Nombre,nombre");
// console.log("premier",nombre[0]);
// console.log("dernier",nombre[nombre.length-1]);
// console.log("milieu",nombre[Math.round((nombre.length-1)/2)]);

// var mixedDataTypes=[25,80,'name','array',true,false]
// console.log(mixedDataTypes.length-1)

// var itCompanies=['Facebook','Google','Microsoft','Apple','Oracle','Amazon'];
// for(var i=0; i< itCompanies.length; i=i+1){
// console.log(itCompanies[i])
// }



// var countriesLength=['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan',
// 'Kenya'];
// var newArray=[]
// for(var i=0; i< countriesLength.length; i=i+1){
//     console.log(countriesLength[i].length)
//     newArray.push(countriesLength[i].length);
// }
// console.log(newArray)

// var secondArray=[]
// for(var i=0; i< countriesLength.length; i=i+1){

//     console.log(countriesLength[i].substring(0,3).toUpperCase())
//     secondArray.push(countriesLength[i].substring(0,3).toUpperCase())
// }
// console.log(secondArray)

// var countriesFinal=[]
// for(var i=0; i< countriesLength.length; i=i+1){
//     countriesFinal.push([countriesLength[i],newArray[i], secondArray[i]]);
// }
// console.log(countriesFinal);






// function xExist(array,x){
//     var resultat= arr.includes(x)
//     return resultat
// }
// var a=["h",5, false]
// console.log(xExist(a,8));

// var dog={
//     name:"dogg",
//     legs:"small",
//     color:"brown",
//     age:"2"
// }
// console.log(dog) 
// console.log("obj avant:",dog);
// dog.breed="chihuahua";
// console.log("obj apres:",dog);



// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }

//   var keys=Object.keys(users);
//   var values=Object.values(users);
//   console.log("keys=",keys);
//   console.log("values=",values);
//   for(var i=0; i<values.length; i=i+1){
//     console.log(values[i].skills) 
//   }

//   var max=0
//   var position
//   for(var i=0;i<values.length;i++){
//     if(values[i].skills.length>max){
//       max=values[i].skills.length;
//       position=1

//     }
//   }
//   console.log(position);
//   console.log('user=',keys[position]);






// function filterArray(arr) {
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++);
//     if (typeof filterArray == number) {
    
//     }
//    return newArray

// }



// function getRealFloor(n) {
//     var n=[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16];
//     }
//     if (n >0 && n<13){
//       return n-1
//     }  
//     if(n >=13){
//      return n-2
//     }
    
//     return n
//     }




    // var sentence = prompt ("write a sentence");
    // var wordCount=0;
    // var letter=[]
    // var vowels=[]
    

    // for (var i = 0; i < wordCount.length(); i++) {
        
    //       if (wordCount.charAt(i) == letter) {
    //         return wordCount++;
    //       }
    //     }

    // for (char letter= 'a'; letter <= 'z'; letter++) {




