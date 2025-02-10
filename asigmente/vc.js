
    function calcul() {
        var r = document.getElementById("R").value;
        var h = document.getElementById("H").value;
        const pi = 3.14;
        
        var volume = Math.pow(r, 2) * h * pi;
        
        document.getElementById("result").value = volume;
    } 
    

