// var btnPlus= document.querySelector(".plus");
// var btnMoins = document.querySelector(".moins");
// var qty= document.querySelector(".quantite");
// var btnTotal=document.querySelector(".total");
// var newNumber=document.querySelector(".prix");
// var span=document.querySelector(".like");
// var span2=document.querySelector(".delete");
// var div=document.querySelector(".parent")

// console.log("btnPlus=", btnPlus);
// console.log("btnMoins=", btnMoins);
// console.log("qty=", qty);
// console.log("btnTotal=", btnTotal);
// console.log("newNumber=", newNumber.innerText);
// console.log("span=", span);
// console.log("span2=", span2);
// console.log("div=",div);

// btnPlus.addEventListener("click",function(){
// qty.innerText=parseFloat(qty.innerText)+1;
// btnTotal.innerText=parseFloat(btnTotal.innerText)+parseFloat(newNumber.innerText);
// });

// btnMoins.addEventListener("click",function(){
//     if(parseFloat(qty.innerText) > 0) {
//     qty.innerText=parseFloat(qty.innerText);
//     btnTotal.innerText=parseFloat(btnTotal.innerText)-100;
// }
// });

// span.addEventListener("click",function() {

// span.style.backgroundColor='red';
// });

// span2.addEventListener("click",function() {
//     div.parentNode.removeChild(div)

//     });

// var count=0;
// var x=3;
// do{
//     count=count+1;
// } while(count<3){
// switch(y){
//     default :
//     case 0 :  x = x-1; BREAK;
//     case 1 : x = x+5;
// }
// }

// function sumCommonAndDistinct(firstArr, secondArr) {
//   var sumCommon = 0;
//   var sumDistinct = 0;
//   var sumTotal = 0;

//   for (var i = 0; i < firstArr.length; i++) {
//     for (var j = 0; j < secondArr.length; j++) {
//       if (firstArr[i] == secondArr[j]) {
//         sumCommon = sumCommon + firstArr[i];
//       }
//     }
//   }

//   for (var i = 0; i < firstArr.length; i++) {
//     sumTotal = sumTotal + firstArr[i];
//   }

// /
//   for (var i = 0; i < secondArr.length; i++) {
//     sumTotal = sumTotal + secondArr[i];
//   }

// //
//   sumDistinct = sumTotal - 2 * sumCommon;

//   console.log("sumDistinct =", sumDistinct);
//   console.log("sumCommon =", sumCommon);
// }

// var arr1 = [3, 1, 7, 9];
// var arr2 = [2, 4, 1, 9, 3];

// sumCommonAndDistinct(arr1, arr2);

// function sumCommonAndDistinct(firstArr, secondArr) {
//   var sumCommon = 0;
//   var sumDistinct = 0;
//   var sumTotal = 0;
//   for (var i = 0; i < firstArr.length; i++) {
//       if (SecondArr.includes(firstArr[i])){
//         sumCommon = sumCommon + firstArr[i];
//       }
//     else{
//         sumDistinct = (sumDistincit + firstArray)[i]
//       }
//     }

//   for (var i = 0; i < secondArr.length; i++) {
//     sumTotal = sumTotal + firstArr[i];
//   }
//   for (var i = 0; i < secondArr.length; i++) {
//     if (!firstArr.includes(secondArr[i])) {
//       sumDistinct=sumDistinct+firstArr[i];
//     }
//     console.log("sumDistinct =", sumDistinct);
//     console.log("sumCommon =", sumCommon);
//   }

// var arr1 = [3, 1, 7, 9];
// var arr2 = [2, 4, 1, 9, 3];

// sumCommonAndDistinct(arr1, arr2);

// var votes = [
//   { upvotes: 13, downvotes: 0 },
//   { upvotes: 2, downvotes: 33 },
//   { upvotes: 132, downvotes: 132 },
//   { upvotes: 32, downvotes: 132 },
//   { upvotes: 18, downvotes: 15 },
//   { upvotes: 0, downvotes: 60 },
// ];

// function newVotes(votes){
//   var newArray=[];
//   for(var i = 0; i < votes; i++){
//   newArray.push(votes.upvotes[i] - votes.downvotes[i])

//   }
//   return newArray

// }

// console.log(newVotes(votes))

// var number = [2, 4, 28, 1, 42, 10];

// function intrus(arr) {
//   var evens = [];
// var odds=[];

//   for (var number of arr) {
//     if (number % 2 == 0) {
//     evens.push(number)

//     }else{
//       odds.push(number)
//     }
//   }
//   console.log("even numbers=", evens);
// console.log("odd numbers=" , odds);
// }

// intrus(number)

// var exemple1=[
//   {nom:"Jhon", age:28},
//   {nom:"Patrick", age:16},
//   {nom:"Katrine", age:45},
//   {nom:"Smith",age:11},
//   {nom:"Harry", age:36},
// {nom:"Paul",age:14}
// ];

// exemple1.sort(function(a,b){
//   return a.age - b.age;

// });

// let votes = [
//   { upvotes: 13, downvotes: 0 },
//   { upvotes: 2, downvotes: 33 },
//   { upvotes: 132, downvotes: 132 },
//   { upvotes: 32, downvotes: 132 },
//   { upvotes: 18, downvotes: 15 },
//   { upvotes: 0, downvotes: 60 },
// ];

// const arr = votes.map((value) => {
//   return value.upvotes - value.downvotes;
// });
// console.log(arr);

// let dimensions = [
//   { width: 2, length: 5, height: 1 },
//   { width: 4, length: 2, height: 2 },
//   { width: 2, length: 3, height: 5 },
// ];

// arr = dimensions
//   .map((value) => {
//     return value.width * value.length * value.height;
//   })
//   .filter((value) => {
//     if (value < 20) {
//       return true;
//     } else {
//       return false;
//     }
//   });

// console.log(arr);

// let countries = [
//   {
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   },
//   {
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia",
//   },
//   { name: "Manila", population: "1,780,148", continent: "Asia" },
// ];

// arr = countries.map((value) => {
//   return `${value.name} has a population of ${value.population} and is situated in ${value.continent}`;
// });
// console.log(arr);

// const products = [
//   {
//     costPrice: 32,
//     sellPrice: 45,
//     inventory: 1200,
//   },
//   {
//     costPrice: 225,
//     sellPrice: 550,
//     inventory: 100,
//   },
//   {
//     costPrice: 2,
//     sellPrice: 7,
//     inventory: 8500,
//   },
// ];

// arr = products.map((value) => {
//   return (value.sellPrice - value.costPrice) * value.inventory;
// });
// console.log(arr);

const spinWord = (phrase) => {
  const arrMots = phrase.split(" ");
  arrMots.map((mot) => {
    if (mot.length >= 5) {
      const reversedArr = mot.split("").revese();
      return reversedArr.join("");
    } else {
      return mot;
    }
  });
  return newArr.join(" ");
};
console.log(spinWords("Hey fellow warriors"));
