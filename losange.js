let btnCheck = document.getElementById("btn");
let result =document.getElementById("para");
btnCheck.addEventListener('click' , function() {

    var etoile = document.getElementById("etoile").value;
    var para = document.getElementById("para");
    var i, k;
    for (i = 1; i <= etoile; i++) {
        for (k = 1; k <= i; k++) {
            para.innerHTML += "*";
        }
        para.innerHTML += "<br>";
    }
});