function myFunction(id){
  document.calc.result.value+=id;
}
function clearscreen()
{
document.calc.result.value="";	
}
function calculate() {
  if (document.calc.result.value) 
  {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } catch(err){
      document.calc.result.value="Syntax Error";
    }
  }
  else
  {
   document.calc.result.value=""; 
  }
}
function changeSign() {
	if(calc.result.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, calc.result.value.length)
	else
		calc.result.value = "-" + calc.result.value
}
function deleteChar()
 {
 calc.result.value = calc.result.value.substring(0, calc.result.value.length - 1)
}