function valuebtn(e){
    //display.value+=e.value; 
    console.log(e.value);
    //let btnval=document.querySelector(".result1");
    //btnval.value+=e.value;
    calcul.display.value+=e.value;
}

function clears(){
    calcul.display.value=null;
}

function evaluates(){
   calcul.display.value=eval(calcul.display.value);
}

function deletes(){
    calcul.display.value=calcul.display.value.slice(0,-1);
}