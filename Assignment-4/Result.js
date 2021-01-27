
function add()
{
        console.log("hi"); 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        sum= Number(num1) + Number(num2);
        console.log(sum);
        document.getElementById("result").value = sum;
}
