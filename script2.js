var btnPlus= document.querySelector(".plus");
var btnMoins = document.querySelector(".moins");
var qty= document.querySelector(".quantite");
var btnTotal=document.querySelector(".total");
var newNumber=document.querySelector(".prix");
var span=document.querySelector(".like");
var span2=document.querySelector(".delete");
var div=document.querySelector(".parent")

console.log("btnPlus=", btnPlus);
console.log("btnMoins=", btnMoins);
console.log("qty=", qty);
console.log("btnTotal=", btnTotal);
console.log("newNumber=", newNumber.innerText);
console.log("span=", span);
console.log("span2=", span2);
console.log("div=",div);

btnPlus.addEventListener("click",function(){
qty.innerText=parseFloat(qty.innerText)+1;
btnTotal.innerText=parseFloat(btnTotal.innerText)+parseFloat(newNumber.innerText);
});

btnMoins.addEventListener("click",function(){
    if(parseFloat(qty.innerText) > 0) {
    qty.innerText=parseFloat(qty.innerText);
    btnTotal.innerText=parseFloat(btnTotal.innerText)-100;
}
});

span.addEventListener("click",function() {

span.style.backgroundColor='red';
});
    


span2.addEventListener("click",function() {
    div.parentNode.removeChild(div)
    
    });



    function getRealFloor(n) {
        var n=[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16];
        }
        if (n >0 && n<13){
          return n-1
        }  
        if(n >=13){
         return n-2
        }
        
        return n
        }