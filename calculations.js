
window.onload=function(){
    let input="";   

    
    const buttonsOperations=[
          { action:'+', func: addToInput},
          { action:'00', func: addToInput},
           {action: 'AC', func: clearInput},
           { action:'-', func: addToInput},
           { action:'sqrt()', func: getSqrt},
           { action:'^2', func: getPower},
           { action:'*', func: addToInput},
           { action:'(', func: addToInput},
           { action:')', func: addToInput},
           { action:'/', func: addToInput},
           { action:'.', func: addToInput},
           { action:'=', func: getResult}
       ];
       
       createElement();

    function createElement(){
       for(let i=0;i<=11;i++){
          
           let newBtn=document.createElement("button");
           newBtn.innerHTML=buttonsOperations[i].action;
           newBtn.onclick= function() {
               buttonsOperations[i].func();
               document.getElementsByClassName('input')[0].value = input;
           };
           
          document.getElementsByClassName('calc-button-operations')[0].appendChild(newBtn);
          
       }

       for(let i=9;i>=0;i--){
           const newBtn=document.createElement("button");
           newBtn.innerHTML=i;
          newBtn.onclick =function addNumbers(){
              input = input + i;
               document.getElementsByClassName("input")[0].value = input;
          }
          document.getElementsByClassName('calc-button-numbers')[0].appendChild(newBtn);
          
       }
       }

           
    function addToInput() {
           input = input + this.action;
           
    }


   function getResult(){
       let result = eval(input);
       document.getElementById('calc-equation').innerHTML = input;
       document.getElementById('result').innerHTML = result;
       input = "";
     
   }

   function getSqrt(){
       let result = Math.sqrt(parseFloat(eval(input)));
       document.getElementById('calc-equation').innerHTML = "sqrt(" + input + ")";
       document.getElementById('result').innerHTML = result;
       input = ""
   }

   function getPower(){
   
       let result = Math.pow(parseFloat(eval(input)), 2);
       document.getElementById('calc-equation').innerHTML = '('+input+")^2";
       document.getElementById('result').innerHTML = result;
       input = "";
      
   
   }

   function clearInput(){
   
       input = "";
       document.getElementById('calc-equation').innerHTML = "";
       document.getElementById('result').innerHTML = "";

   }



   document.addEventListener('keypress', (e) => {
   if (e.key === 'Enter') {
     getResult();
     
   }
   
   });

}





