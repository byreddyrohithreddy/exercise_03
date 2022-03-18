function addition()
{
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=(num1+num2);
}
function substraction()
{
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=(num1-num2);
}
function multi()
{
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=(num1*num2);
}
function division()
{
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value=(num1/num2);
}