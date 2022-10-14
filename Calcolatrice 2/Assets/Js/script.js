function dig(n) { 
    document.getElementById("area").value += n;  
}
function ris() { 
    document.getElementById("area").value=eval(document.getElementById("area").value); 
} 
function reset() { 
    document.getElementById("area").value = " "; 
}
function cancella() { 
    var a = document.form.area.value;
    document.getElementById("area").value = a.substring(0, a.length-1);
}


