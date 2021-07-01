function compute()
{
    p = document.getElementById("principal").value;
    var principa = document.getElementById("principal").value;
    if(principa<1){
    //result=document.getElementById("result");
    //result.innerHTML="Enter a positive number";
    alert("Enter a positive number");
    principal.focus();
    }
    else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var d =document.getElementById("rate_val");
    d.innerText=rateval;
    
    rateval.onchange=function(){
    d.innerText=rateval;
    };
    
    
}  
    result=document.getElementById("result");
    result.innerHTML="If you deposit "+principal +", "+"at an interest rate of "+rate+"%."+
    "You will receive an amount of "+interest+" in the year "+year;
    }


    

}
        
        