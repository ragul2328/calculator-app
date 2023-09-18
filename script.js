function appendToDisplay(value){
    const displayresult=document.getElementById("result");
    displayresult.textContent+=value;

}
function clearDisplay(){
    const displaclear=document.getElementById('result');
    displaclear.textContent=" ";
}
function calculate(){
   try{
   const displayresult=document.getElementById('result');
    const expression=displayresult.textContent;
    const result=eval(expression);
    displayresult.textContent=result;
}
catch(error){
    const displayresult=document.getElementById('result');
    displayresult.textContent="Error";
}
}
