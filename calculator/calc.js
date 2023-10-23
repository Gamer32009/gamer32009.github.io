function appendOperation(op){
    if (document.getElementById('result-area').innerHTML == "ERROR" || document.getElementById('result-area').innerHTML == "undefined" ){
        document.getElementById('result-area').innerHTML = "";
    }
    document.getElementById('result-area').innerHTML += op;
    
}
function calc(){
    let container = document.getElementById('result-area');
    let expresion = container.innerHTML;
    try{
     container.innerHTML = eval(expresion);
    }
    catch {
        container.innerHTML = "ERROR";
    }
}
function clearresar(){
    document.getElementById('result-area').innerHTML = ""
}
