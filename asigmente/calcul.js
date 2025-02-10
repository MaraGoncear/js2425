function calc() {
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    var oper = document.getElementById('operations').value; 

            
        if(oper === '+'){
            document.getElementById('result').value = n1 + n2;
        }
        if(oper === '-'){
            document.getElementById('result').value = n1 - n2;
        }
        if(oper === '/'){
            document.getElementById('result').value = n1 / n2;
        }
        if(oper === '*'){
            document.getElementById('result').value = n1 * n2;
        }
       
    }
   