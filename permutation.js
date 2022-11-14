var monBouton = document.getElementById('button');
monBouton.addEventListener('click', function(){

  var x, input1, input2;
  input1 = document.getElementById("val1");
  input2 = document.getElementById("val2")
  x = input1.value;
  input1.value = input2.value;
  input2.value = x;
})
